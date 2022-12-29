import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContexts";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="relative flex flex-col h-auto w-80 bg-slate-100">
            <img src={imageUrl} alt={`${name}`} className="w-full h-full" />
            <div className="flex justify-between px-2">
                <span>{name}</span>
                <span>${price}</span>
            </div>
            <button
                onClick={addProductToCart}
                className="absolute z-30 self-center px-3 py-2 mt-3 ml-3 text-white transition-all duration-300 bg-black rounded-md hover:scale-105 bottom-10"
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductCard;
