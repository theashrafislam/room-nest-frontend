import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function FirebaseProvider({ children }) {

    const [user, setUser] = useState(null);


    // create user using email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user using email and password 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login user using google account 
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // manege user on state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    // logout function hehe 
    const logOut = () => {
        return signOut(auth)
    }

    // profile update setup 
    const profileUpdate = (displayName) => {
        return updateProfile(auth.currentUser, {displayName, photoURL: "hello"})
    }



    const allValues = {
        createUser,
        loginUser,
        loginWithGoogle,
        user,
        logOut,
        profileUpdate
    }

    return (
        <AuthContext value={allValues}>
            {children}
        </AuthContext>
    )
}

export default FirebaseProvider;