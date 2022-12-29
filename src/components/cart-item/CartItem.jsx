import React from "react";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="flex w-full h-20 mb-3 ">
            <img className="w-1/3" src={imageUrl} alt={`${name}`} />
            <div className="flex flex-col items-center justify-center ml-4">
                <span>{name}</span>
                <span>
                    {quantity} * {price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
