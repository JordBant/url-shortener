import React from 'react'
import TextInputMUI from '../mui-text-input-component'
// import SubmitUrl from '../submit-url-btn-component'

function SignUp() {
  return (
    <div className="sign-up">
      <div className="sign-up-form">
      <h1 className="signup-title">Sign Up</h1>
        <TextInputMUI label = {`First Name`} type = { `text` } />
        <TextInputMUI label = {`Last Name`} type = { `text` } />
        <TextInputMUI label = {`Company Name`} type = { `text` } />
        <TextInputMUI label = {`Email`} type = { `email` } />
        <TextInputMUI label = {`Phone`} type = { `number` } />
      </div>
    </div>
  )
}

export default SignUp