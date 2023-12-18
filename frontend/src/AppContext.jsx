import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    //sharable things inside AppProvider
    const [loggedin, setloggedin] = useState(currentUser !== null);

    const navigate = useNavigate();

    const logout = () => {
        setloggedin(false);
        sessionStorage.removeItem('user');
        navigate('/login');
    }

    return <AppContext.Provider value={{loggedin,setloggedin,logout, currentUser}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {return useContext(AppContext)}

export default useAppContext;