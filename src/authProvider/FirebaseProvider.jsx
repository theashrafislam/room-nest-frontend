import React, { createContext } from 'react'


export const AuthContext = createContext(null);

function FirebaseProvider({ children }) {

    const allValues = {
        name: 'Rima'
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    )
}

export default FirebaseProvider;