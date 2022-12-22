import React from "react";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/signInForm/SignInForm";

const Authentication = () => {
    return (
        <div>
            <div className="flex items-center justify-around ">
                <SignInForm />
                <SignUpForm />
            </div>
        </div>
    );
};

export default Authentication;
