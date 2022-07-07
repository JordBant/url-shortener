import InputMUI from "../mui-input-component"
import SubmitFormBtn from "../submit-form-btn/submit-form-button"
import {React, Fragment} from "react"

const Login = () => {
  return (
    <Fragment>
      <div className="form">
        <h1 className="form-title">Login</h1>
        <InputMUI label = 'Username' />
        <InputMUI type = 'password' label = 'Password' />
        <SubmitFormBtn buttonName = 'Log In' />
      </div>
    </Fragment>
  )
}

export default Login