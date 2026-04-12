
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";


const Protected=({Children})=>{
    const {user,loading} = useAuth();

    if(loading){
        return (<main><h1>loading...</h1></main>)
    }

    if(!user){
       return <Navigate to={'/login'}/>
    }
     
  return Children
}

export default Protected
