import React from 'react'

export default function Login() {
  return (
    <div className='login-form'>
        <div className='form-section'>
            <h2>Log in</h2>
            <form className='form'>
                <label className='email-text'>Email</label>
                <input type='email' className='email' placeholder='Email'/>
                <label className='password-text'>Password</label>
                <input type='password' className='password' placeholder='Password'/>
                <button className='btn'>Log in</button>
            </form>
            <div className='linke-here'>
                <a href='!#'>Register Here</a>
                <a href='!#'>Forgot Password?</a>
            </div>
        </div>
    </div>
  )
}
