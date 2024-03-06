import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export const useData = () => {
    return useContext(UserContext)
}

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState({
        name: "John",
        email: "john@gmail.com"
    })

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider