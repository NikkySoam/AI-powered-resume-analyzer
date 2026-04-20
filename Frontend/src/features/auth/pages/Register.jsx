import { Link,useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Register() {
    const navigate = useNavigate();

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")

    const {handleRegister,loading} = useAuth();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await handleRegister({username,email,password});
        navigate('/home');
    }

    if(loading){
        return (<main><h2>loading....</h2></main>)
    }

  return (
    <main>
        <div className="form-container">

        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input 
                onChange={(e)=> setUsername(e.target.value)}
                type="text" placeholder='Enter username' id='username' name='username' />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                onChange={(e)=> setEmail(e.target.value)} 
                type="email" placeholder='Enter email address' id='email' name='email'/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                onChange={(e)=> setPassword(e.target.value)} 
                type="password" placeholder='Enter password' name='password' id='password' />
            </div>
            <button className='button primary-button'>Register</button>
        </form>
        <p>Already have an account? <Link to={'/login'}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register
