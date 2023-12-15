import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import bus from './signup-bus.webp'
import './Signup.css'
import Footer from '../../components/Footer/Footer'


const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAdress] = useState('')
  const [gender, setGender] = useState('female')

  const signup = async () => {
    if (!name) {
      alert("Name is required");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!password) {
      alert("Password is required");
      return;
    }

    if (!mobile) {
      alert("Mobile is required");
      return;
    }

    if (!address) {
      alert("Adress is required");
      return;
    }

    if (!gender) {
      alert("Gender is required");
      return;
    }

    const response = await axios.post('/signup', {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
      gender: gender
    })

    alert(response?.data?.message)

    if (response?.data?.success) {
      window.location.href = '/login'
      alert(response?.data?.success)
    }
    else {
      alert(response?.data?.message)
    }
  }

  useEffect(() => {
    const storeuser = JSON.parse(localStorage.getItem("user" || '{}'))
    if (storeuser?.email) {
      alert("You have already signup !")
      window.location.href = '/';
    }
  }, [])

  return (
    <>

      <Navbar />
      <div className='signup-form-container'>
        <div className='signup-container'>
          <div className='image-container'>
            <img src={bus} />
          </div>
          <div className='form-main-container'>
            <form >
              <h1 className='heading'>WellCome! SignUp here</h1>
              <div className='input-container'>
                <label htmlFor='name' className='signpu-label'>Name : </label>
                <input type='text'
                  placeholder='Enter Your Name'
                  id='name'
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  } className='signpu-input-box' />
              </div>

              <div className='input-container'>
                <label htmlFor='email' className='signpu-label'>Email   : </label>
                
                <input
                  type='text'
                  placeholder='Enter Your Email'
                  id='email'
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className='signpu-input-box'
                />
              </div>

              <div className='input-container'>
                <label htmlFor='password' className='signpu-label'>Password : </label>
                
                <input
                  placeholder='Enter Your Password'
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className='signpu-input-box'
                />
              </div>

              <div className='input-container'>
                <label htmlFor='mobile' className='signpu-label'>Mobile   : </label>
                
                <input
                  type='text'
                  placeholder='Enter Your Mobile'
                  id='mobile'
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value)
                  }
                  className='signpu-input-box'
                />
              </div>

              <div className='input-container'>
                <label htmlFor='address' className='signpu-label'>Adress   : </label>
                
                <input
                  type='text'
                  placeholder='Enter Your Adress'
                  id='address'
                  value={address}
                  onChange={(e) =>
                    setAdress(e.target.value)
                  }
                  className='signpu-input-box'
                />
              </div>

              <div className='gender-container'>
                <div  className='male-container'>
                  <input type='radio' name='gender' id='male' checked={gender === 'male'}
                    onClick={() => {
                      setGender('male')
                    }}
                    className='gender'
                  />
                  <label className='male-gender'>Male</label>
                </div>

                <div className='male-container'>
                  <input type='radio' name='gender' id='female' checked={gender === 'female'}
                    onClick={() => {
                      setGender('female')
                    }}
                    className='gender'
                  />
                  <label className='female-gender'>Female</label>
                </div>
              </div>
              <div >
                <button type='button' onClick={signup} className='signup-btn'>SignUp</button>

                <p>  
                  <Link to={'/login'} className='again-login'>Already have account? <span className='login'>Login</span></Link>
                </p>
                
              </div>
            </form >
          </div >
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SignUp;
