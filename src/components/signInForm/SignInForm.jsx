import React, { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    return (
        <div className="flex flex-col ml-8 ">
            <h2 className="text-sm text-center">Already have an account?</h2>
            <span className="mt-2 text-center">Sign in with your email and password</span>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4 ml-2 w-80">
                <label className="mt-4 mb-2 ml-3">Email</label>
                <input
                    onChange={handleChange}
                    name="email"
                    value={email}
                    type="email"
                    required
                    className="ml-2 border border-blue-400"
                />

                <label className="mt-4 mb-2 ml-3">Password</label>
                <input
                    onChange={handleChange}
                    name="password"
                    value={password}
                    type="password"
                    required
                    className="ml-2 border border-blue-400"
                />
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="px-3 py-2 mt-3 ml-3 text-white transition-all duration-300 bg-black rounded-md hover:scale-105"
                    >
                        Sign in
                    </button>
                    <button
                        type="button"
                        className="px-3 py-2 mt-3 text-white transition-all duration-300 bg-blue-700 rounded-md to hover:scale-105"
                        onClick={logGoogleUser}
                    >
                        Sign in with google{" "}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
