import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    const response = await axios.post('/login', {
      email: email,
      password: password
    })

    alert(response?.data?.message)

    if (response?.data?.success) {
      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      window.location.href = '/';
    }
  }

  const [user, setUser] = useState({})

  useEffect(() => {
    const storeuser = JSON.parse(localStorage.getItem("user" || '{}'))
    if (storeuser?.email) {
      alert("You have already logged in!")
      window.location.href = '/';
    }
  }, [])

  return (
    <div className='login-body'>

      <div className='j-content-center '>

        <form className='form-container'>
          <h1 className='text-center login-head'>Login Here</h1>

          <div className='form-input'>
            <label htmlFor='email' className=' label'>Email  </label>
            <br />
            <input
              type='text'
              placeholder='Enter Your Email'
              id='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='input'
            />
          </div>

          <div className='form-input'>
            <label htmlFor='password' className=' label'>Password  </label>
            <br />
            <input
              placeholder='Enter Your Password'
              type='password'
              id='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className='input'
            />
          </div>
          <div className='login-btn-container'>
            <button type='button' className='login-btn' onClick={login}>Login</button>
            <p>
              <Link to={'/signup'} className='create-account'>Create An Account</Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login;
