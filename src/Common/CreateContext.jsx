import {createContext, useState} from "react";

// context store
const StoreDataContext = createContext(null)

export default StoreDataContext;


// context provider
export const StoreProvider = ({children}) => {
    const [formContext, setFormContext] = useState([])
    return (
        <>
            <StoreDataContext.Provider value={{formContext, setFormContext}}>
                {children}
            </StoreDataContext.Provider>
        </>
    )
}