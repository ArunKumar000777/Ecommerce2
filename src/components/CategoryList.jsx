import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
    const categories = [
        {
            id: 1,
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
            id: 2,
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
            id: 3,
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
            id: 4,
            title: "womens",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        },
        {
            id: 5,
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        },
    ];
    return (
        // <div className="grid place-items-center grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-x-1 md:grid-cols-2 md:gap-x-1 md:gap-y-3 md:px-2 ">
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5 flex-1">
            {categories.map((category) => (
                <CategoryCard category={category} key={category.id} />
            ))}
        </div>
    );
};

export default CategoryList;
