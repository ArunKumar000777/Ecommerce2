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
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
});

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    console.log(cartCount);
    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        console.log(newCartCount);
        setCartCount(newCartCount);
    }, [cartItems]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    console.log(cartItems);

    const addItemToCart = (productToAdd) => {
        setCartItems(addtoCartItem(cartItems, productToAdd));
    };
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems,cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
