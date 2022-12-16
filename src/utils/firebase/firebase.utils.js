import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyASZdFsQd8PWLa512sGeB7Vdjlbhfbbpuc",
    authDomain: "crown-clothing-db-1a161.firebaseapp.com",
    projectId: "crown-clothing-db-1a161",
    storageBucket: "crown-clothing-db-1a161.appspot.com",
    messagingSenderId: "12041708537",
    appId: "1:12041708537:web:f4efadcbfce68cc55dd328",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userAuth);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName: displayName,
                email: email,
                createdAt: createdAt
            })
        }catch (err) {
            console.log('error creating the user' , err.message);
        }
    }

    return userDocRef
};
