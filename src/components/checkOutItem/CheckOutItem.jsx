import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContexts";

const CheckOutItem = ({ cartItem }) => {
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;
    const clearItemHandle = () => {
        clearItemFromCart(cartItem);
    };
    return (
        <div className="grid grid-cols-5 py-4 border-b-2 border-gray-200">
            <div className="w-32 h-32 ">
                <img src={imageUrl} alt={`${name}`} className="w-full h-full" />
            </div>

            <span className="self-center ">{name}</span>
            <span className="flex self-center ml-2 gap-x-2">
                <div className="cursor-pointer" onClick={() => removeItemFromCart(cartItem)}>
                    &#10094;
                </div>
                {quantity}
                <div className="cursor-pointer" onClick={() => addItemToCart(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="self-center ml-3">{price}</span>
            <div onClick={clearItemHandle} className="self-center cursor-pointer ml-7">
                &#10005;
            </div>
        </div>
    );
};

export default CheckOutItem;
