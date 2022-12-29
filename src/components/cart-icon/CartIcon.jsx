import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContexts";
const CartIcon = () => {
    const { setIsCartOpen, isCartOpen,cartCount } = useContext(CartContext);
    return (
        <div className="relative flex items-center justify-center w-11 h-11">
            <ShoppingIcon onClick={() => setIsCartOpen(!isCartOpen)} className="h-8 cursor-pointer w-7" />
            <span className="absolute font-medium top-4">{cartCount}</span>
        </div>
    );
};

export default CartIcon;
