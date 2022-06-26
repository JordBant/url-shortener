import {Fragment, React} from 'react'
import InputMUI from '../mui-input-component'
import SubmitFormBtn from '../submit-form-btn/submit-form-button'

const SignUp = () => {
  return (
      <Fragment>
        <div className="form">
          <h1 className="form-title">Sign Up</h1>
          <InputMUI label = 'First Name'/>
          <InputMUI label = 'Last Name' />
          <InputMUI label = 'Email' type = 'email' />
          <InputMUI label = 'Username' />
          <InputMUI label = 'Password' type = 'password' />
          <InputMUI label = 'Confirm Password' type = 'password' />
          <SubmitFormBtn buttonName = 'Sign Up' />
        </div>
      </Fragment>
  )
}

export default SignUp