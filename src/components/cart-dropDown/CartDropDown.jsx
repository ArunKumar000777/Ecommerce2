import React from "react";

const CartDropDown = () => {
    return (
        <div className="absolute z-20 bg-white border-2 border-black border-solid right-7 top-16 w-60 h-80">
            <div className="flex justify-center">
                <button className="absolute px-3 py-2 mt-3 ml-3 text-white transition-all duration-300 bg-black rounded-md bottom-1 hover:scale-105">TO CHECKOUT</button>
            </div>
        </div>
    );
};

export default CartDropDown;
