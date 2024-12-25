import {createContext, useContext, useState} from "react";

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


// custom hook
export const useContextStore = () => {
    const context = useContext(StoreDataContext)
    if (!context) {
        throw new Error('useContextStore must be used within a StoreProvider')
    }
    return context;
}