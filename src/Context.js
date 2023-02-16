import React, { useState, createContext, } from 'react';
export const UserProvider = createContext(null);
 
const Context = ({children}) => {
    const [headerHandler, setHeaderHandler] = useState(true)

    return (
        <UserProvider.Provider value={{
            headerHandler,
            setHeaderHandler,
        }}>
            {children}
        </UserProvider.Provider>
    )
}
export default Context;
