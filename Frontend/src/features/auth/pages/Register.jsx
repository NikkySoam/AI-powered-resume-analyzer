import { Link } from "react-router";
function Register() {
  const handleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <main>
        <div className="form-container">

        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Enter username' id='username' name='username' />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email address' id='email' name='email'/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter password' name='password' id='password' />
            </div>
            <button className='button primary-button'>Register</button>
        </form>
        <p>Already have an account? <Link to={'/login'}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register
