import React from 'react'
import TextInputMUI from '../mui-text-input-component'

function Login() {
  return (
    <div className="login">
        <div className="login-form">
        <h1 className="login-title">Login</h1>
            <TextInputMUI label = {`Email`} type = { `email` } id = 'email' />
            <TextInputMUI label = {`Password`} type = { `password` } id = 'password' />
        </div>
    </div>
  )
}

export default Login