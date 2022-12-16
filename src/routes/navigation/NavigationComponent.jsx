import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
const NavigationComponent = () => {
    return (
        <>
            <div className="flex items-center justify-between px-4 py-4 ">
                <Link to="/">
                    <CrownLogo />
                </Link>
                <div className="flex gap-5">
                    <Link to="/shop" className="text-gray-700">
                        SHOP
                    </Link>
                    <Link to="/sign-in" className="text-gray-700">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default NavigationComponent;
