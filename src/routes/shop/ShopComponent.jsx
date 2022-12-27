import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../../components/product-card/ProductCard";

const ShopComponent = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="grid gap-3 justify-items-center md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ShopComponent;
