import React, { useContext } from "react";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartContexts";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
    const navigate = useNavigate();
    const { cartItems,setIsCartOpen } = useContext(CartContext);
    const goToCheckOutPage = () => {
        navigate("/checkout");
        setIsCartOpen(false)
    };
    return (
        <div className="absolute z-20 overflow-auto bg-white border-2 border-black border-solid right-7 top-16 w-60 h-80">
            <div>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <div className="flex justify-center mt-auto ">
                <button onClick={goToCheckOutPage} className="px-3 py-2 text-white transition-all duration-300 bg-black rounded-md hover:scale-105">
                    GO TO CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default CartDropDown;
