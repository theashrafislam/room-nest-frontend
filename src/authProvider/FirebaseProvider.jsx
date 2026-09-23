import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function FirebaseProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(loading)


    // create user using email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user using email and password 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login user using google account 
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // manege user on state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [setUser, user]);

    // logout function hehe 
    const logOut = () => {
        return signOut(auth)
    }

    // profile update setup 
    const profileUpdate = async (displayName) => {
        console.log(displayName)
        console.log("Current User:", auth.currentUser);
        return await updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: "hello"
        });
    }




    const allValues = {
        createUser,
        loginUser,
        loginWithGoogle,
        user,
        logOut,
        profileUpdate,
        loading
    }

    return (
        <AuthContext value={allValues}>
            {children}
        </AuthContext>
    )
}

export default FirebaseProvider;