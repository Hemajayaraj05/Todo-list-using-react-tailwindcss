import { createContext, useState} from "react"


const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    const login = (email, password) => {
        console.log("Logged in : ", email,password);
        setUser({email})
    };

    return(
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
