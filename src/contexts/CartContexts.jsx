import { createContext, useEffect, useState } from "react";

const addtoCartItem = (cartItems, productToAdd) => {
    //  find if the cartitems contains product id
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);
    //  if found , increment the quantity
    if (existingCartItem) {
        return cartItems.map((item) => (item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item));
    }
    // return new array with modified cart items/new cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove from cartItems array
    const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);

    // chect if quantity is less than one then remove it from cartItems array
    if (existingCartItem.quantity <= 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    // return back cartItems with matching cart item with reduced quantity
    if (existingCartItem) {
        return cartItems.map((item) => (item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item));
    }
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

// ! cartProvider functional component
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState();
    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    // multiply quantity with price on each cart item
    useEffect(() => {
        const newCartTotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const addItemToCart = (productToAdd) => {
        setCartItems(addtoCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };


    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart,cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
