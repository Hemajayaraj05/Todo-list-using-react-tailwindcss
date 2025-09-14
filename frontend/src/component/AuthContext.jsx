import { createContext, useEffect, useState} from "react"


const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const storedUser=localStorage.getItem("user");
        if(storedUser)
        {
            setUser(JSON.parse(storedUser));
        }
    },[])

    const login = (email, password) => {
        console.log("Logged in : ", email,password);
        const loggedUser={email};
        setUser(loggedUser)
        localStorage.setItem("user",JSON.stringify(loggedUser));
    };

    return(
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
