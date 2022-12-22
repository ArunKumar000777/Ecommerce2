import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

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

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("cannot create user , email already in use");
            } else {
                console.log(`user creation failed: ${error}`);
            }
        }
    };

    return (
        <div className="flex flex-col ml-8">
            <h2 className="text-sm text-center">Don't have an account?</h2>
            <span className="mt-2 text-base text-center">Sign Up with your email and password</span>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4 ml-2 w-80">
                <label className="mt-4 mb-2 ml-3">Display Name</label>
                <input
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                    type="text"
                    required
                    className="ml-2 border border-blue-400"
                />

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

                <label className="mt-4 mb-2 ml-3">Confirm Password</label>
                <input
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                    type="password"
                    required
                    className="ml-2 border border-blue-400"
                />

                <button
                    type="submit"
                    className="px-3 py-2 mt-3 ml-3 text-white transition-all duration-300 bg-black rounded-md hover:scale-105"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
