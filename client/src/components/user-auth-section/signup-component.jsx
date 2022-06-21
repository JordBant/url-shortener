import {React, Fragment} from 'react'
// import SubmitUrl from '../submit-url-btn-component'
import SubmitFormBtn from '../submit-form-btn/submit-form-button'

function SignUp() {
  return (
    <Fragment>
      <div className="sign-up">
        <div className="sign-up-form">
          <h1 className="form-title">Sign Up</h1>
            
          </div>
          <SubmitFormBtn buttonName = 'Sign Up' />
        </div>
    </Fragment>
  )
}

export default SignUp