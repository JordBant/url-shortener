import {Fragment, React, useState} from 'react'
import InputMUI from '../mui-input-component'
import SubmitFormBtn from '../submit-form-btn/submit-form-button'

const SignUp = () => {
  //For Form Validation 

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState(['', undefined])

  // const candidate = {
  //   firstName,
  //   lastName,
  //   userName,
  //   email,
  //   password,
  //   confirm
  // }

  return (
      <Fragment>
        <form className="form">
          <h1 className="form-title">Sign Up</h1>
          <InputMUI onChange = { (event) => setFirstName(event.target.value)} value = {firstName} label = 'First Name'/>
          <InputMUI onChange = { (event) => setLastName(event.target.value)} value = {lastName} label = 'Last Name' />
          <InputMUI onChange = { (event) => setEmail(event.target.value)} value = {email} label = 'Email' type = 'email' />
          <InputMUI onChange = { (event) => setUserName(event.target.value)} value = {userName} label = 'Username' />
          <InputMUI onChange = { (event) => setPassword(event.target.value)} value = {password} label = 'Password' type = 'password' />
          <InputMUI onChange = { (event) => setConfirm(event.target.value)} value = {confirm} label = 'Confirm Password' type = 'password' />
          <SubmitFormBtn buttonName = 'Sign Up' />
        </form>
      </Fragment>
  )
}

/**
 * 
 * Form will send SubmitBtn a constructed newUser to validate.
 * If SubmitBtn detects any input that is invalid, it will trigger a state change
 * in parent.
 * 
 * 
 * 
 */

export default SignUp