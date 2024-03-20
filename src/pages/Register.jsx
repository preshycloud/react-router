import React, { useState } from 'react'
import '../styles/Register.css'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    const formData = {fullName, email, phone, password}
    console.log(formData)
  }
  return (
    <div>
     <div className="registerpage">
       <div className="form-container">
          <form action="" className='register-form' onSubmit={submitForm}>
            <h2>Register</h2>
            <div className="input-container">
              <label>Fullname</label>
              <input 
                value={fullName} 
                type="text" 
                placeholder='Enter your Fullname'
                onChange = {(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Email</label>
              <input 
                value={email} 
                type="email" 
                placeholder='Enter your email'
                onChange = {(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Phone Number</label>
              <input 
                value={phone} 
                type="tel" 
                placeholder='Enter your Phone Number'
                onChange = {(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label>Password</label>
              <input 
                value={password} 
                type="password" 
                placeholder='Enter your Password'
                onChange = {(e) => setPassword(e.target.value)}
              />
            </div>

            <button type='submit'>Submit</button>
          </form>
       </div>
     </div>
     
    </div>
  )
}

export default Register
