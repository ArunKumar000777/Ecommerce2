import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/UserContest";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropDown/CartDropDown";
import { CartContext } from "../../contexts/CartContexts";

const NavigationComponent = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const handleSignOut = async () => {
        const res = await signOutUser();
        setCurrentUser(null);
        console.log(res);
    };

    return (
        <>
            <div className="flex items-center justify-between px-4 py-4 ">
                <Link to="/">
                    <CrownLogo />
                </Link>
                <div className="flex items-center justify-center gap-5">
                    <Link to="/shop" className="text-gray-700">
                        SHOP
                    </Link>

                    {currentUser ? (
                        <span onClick={handleSignOut} className="text-gray-700 cursor-pointer">
                            SIGN OUT
                        </span>
                    ) : (
                        <Link to="/auth" className="text-gray-700">
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
            </div>
                {isCartOpen ? <CartDropDown /> : null}
            <Outlet />
        </>
    );
};

export default NavigationComponent;
