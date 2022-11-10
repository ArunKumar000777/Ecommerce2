import React from "react";

const CategoryCard = ({ category }) => {
    return (
        <div className=" bg-slate-500 relative h-64 overflow-hidden">
            <img className="brightness-75 h-full hover:scale-110 transition duration-1000" src={category?.imageUrl} alt="category-img" />
            <div className="flex justify-center">
                <div className="absolute bottom-20 opacity-80 outline-none rounded-lg bg-white px-3 py-1 hover:bg-black/60  cursor-pointer hover:text-white transition duration-150">
                    <h3 >{category?.title}</h3>
                    <span>SHOP NOW</span>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
