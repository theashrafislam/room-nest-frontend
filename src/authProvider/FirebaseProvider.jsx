import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

function FirebaseProvider({ children }) {



    // create user using email and password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }




    const allValues = {
        createUser,

    }

    return (
        <AuthContext value={allValues}>
            {children}
        </AuthContext>
    )
}

export default FirebaseProvider;