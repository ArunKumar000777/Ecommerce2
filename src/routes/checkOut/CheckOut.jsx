import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContexts";
import CheckOutItem from "../../components/checkOutItem/CheckOutItem";

const CheckOut = () => {
    const { cartItems,cartTotal} = useContext(CartContext);
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center w-2/3">
                <div className="grid grid-cols-5 py-2 border-b-2 border-gray-200">
                    <div>
                        <span>Product</span>
                    </div>
                    <div>
                        <span>Description</span>
                    </div>
                    <div>
                        <span>Quantity</span>
                    </div>
                    <div>
                        <span>Price</span>
                    </div>
                    <div>
                        <span>Remove</span>
                    </div>
                </div>
                {cartItems.map((cartItem) => (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className="self-end mr-32">Total : $ {cartTotal}</span>
            </div>
        </div>
    );
};

export default CheckOut;
