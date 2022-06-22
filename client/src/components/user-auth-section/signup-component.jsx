import {React, Fragment} from 'react'
import InputMUI from '../mui-input-component'
// import SubmitUrl from '../submit-url-btn-component'
import SubmitFormBtn from '../submit-form-btn/submit-form-button'

function SignUp() {
  return (
    <Fragment>
      <div className="sign-up">
        <div className="sign-up-form">
          <h1 className="form-title">Sign Up</h1>
            <InputMUI label = 'First Name'/>
            <InputMUI label = 'Last Name' />
            <InputMUI type = 'email' label = 'Email' />
            <InputMUI label = 'Username' />
            <InputMUI type = 'password' label = 'Password' />
            <InputMUI type = 'password' label = 'Confirm Password' />
          </div>
          <SubmitFormBtn buttonName = 'Sign Up' />
        </div>
    </Fragment>
  )
}

export default SignUp