import { login,register,logout, getUser } from "../services/auth.api"
import { useContext, useEffect } from "react"
import { AuthContext } from "../auth.context"


export const useAuth = ()=>{
    const context = useContext(AuthContext);
    const {user,setUser,loading,setLoading} = context;

    const handleLogin = async({email,password})=>{
        setLoading(true);
        try {
            const data = await login({email,password});
            setUser(data.user);
        } catch (error) {
            
        }finally{
            setLoading(false);
        }
    }

    const handleRegister = async({username,email,password})=>{
        setLoading(true);
        try {
            const data = await register({username,email,password});
            setUser(data.user);
        } catch (error) {
            
        }finally{
            setLoading(false);
        }
        
    }

    const handleLogout = async()=>{
        setLoading(true);
        try {
            await logout();
            setUser(null);
        } catch (error) {
            
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        const getAndSetUser = async()=>{
            const data = await getUser();
            if(data){
                setUser(data.user) 
            } else{
                setUser(null)
            }
          
            setLoading(false);
        }

        getAndSetUser();
    },[])

    return {user,loading,handleLogin,handleRegister,handleLogout};
}