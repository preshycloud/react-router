import React, { useState } from 'react'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = (e) => {
    e.preventDefault()
    const loginData = {username, password}
    console.log(loginData)
  }
  return (
    <div> 
     <div className="loginpage">
      <div className="login-container">
      <h2>Login</h2>
      <form className='loginform' onSubmit={submitLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
     </div>
      
    </div>
  )
}

export default Login
