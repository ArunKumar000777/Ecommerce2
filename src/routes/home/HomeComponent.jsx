import React from "react";
import ShopComponent from "../shop/ShopComponent";
import CategoryList from "../../components/CategoryList";
import { Outlet } from "react-router-dom";

const HomeComponent = () => {
    return (
        <div className="App">
            {/* <Outlet/> */}
            <CategoryList />
            {/* <ShopComponent /> */}
        </div>
    );
};

export default HomeComponent;
