import {React, useState} from 'react'
import InputMUI from '../mui-input-component'
// import SubmitUrl from '../submit-url-btn-component'
import SubmitFormBtn from '../submit-form-btn/submit-form-button'

const SignUp = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)
  const isActive = toggle ? 'active' : '' ; 

  return (
      <div className={`sign-up ${isActive} `} onClick={handleClick}>
        <div className="sign-up-form">
          <h1 className="form-title">Sign Up</h1>
          <InputMUI label = 'First Name'/>
          <InputMUI label = 'Last Name' />
          <InputMUI label = 'Email' type = 'email' />
          <InputMUI label = 'Username' />
          <InputMUI label = 'Password' type = 'password' />
          <InputMUI label = 'Confirm Password' type = 'password' />
        </div>
        <SubmitFormBtn buttonName = 'Sign Up' />
      </div>
  )
}

export default SignUp