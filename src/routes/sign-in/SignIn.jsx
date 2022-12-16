import { async } from "@firebase/util";
import React from "react";
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef =await createUserDocumentFromAuth(user);
        console.log(user)
    };
    return (
        <div>
            <h1>Sign In Page </h1>
            <button className='px-3 py-2 mt-3 text-white transition-all duration-300 bg-black rounded-md hover:scale-105' onClick={logGoogleUser} >Sign in with google </button>
        </div>
    );
};

export default SignIn;
