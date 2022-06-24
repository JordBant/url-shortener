import InputMUI from "../mui-input-component"
import SubmitFormBtn from "../submit-form-btn/submit-form-button"
import {React, Fragment, useState} from "react"

const Login = ({formType}) => {
  const [active, setActive] = useState(false)
  const isActive = formType === 'Login' ? 'active' : ''

  return (
    <div className={`login ${isActive}`}>
      <div className="login-form">
        <h1 className="form-title">Login</h1>
        <InputMUI label = 'Username' />
        <InputMUI type = 'password' label = 'Password' />
      </div>
    <SubmitFormBtn buttonName = 'Log In' />
    </div>
  )
}

export default Login