import {Fragment, React, useState} from 'react'
import InputMUI from '../mui-input-component'
import SubmitFormBtn from '../submit-form-btn/submit-form-button'

const SignUp = () => {
  //For Form Validation 

  const [firstName, setFirstName] = useState(['', null])
  const [lastName, setLastName] = useState(['', null])
  const [userName, setUserName] = useState(['', null])
  const [email, setEmail] = useState(['', null])
  const [password, setPassword] = useState(['', null])
  const [confirm, setConfirm] = useState(['', null])

  const updateArrState = (stateArr, event) => {
    const cloneArr = [event.target.value, stateArr[1]]
    return cloneArr
  }
  const candidate = {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirm
  }

  const logic = (event) => console.log(event)

  return (
      <Fragment>
        <form className="form">
          <h1 className="form-title">Sign Up</h1>
          <InputMUI 
          value = {firstName} 
          label = 'First Name'
          handleChange = {logic} 
          />

          <InputMUI 
          value = {lastName} 
          label = 'Last Name' 
          onChange = { () => {
            setLastName(updateArrState(lastName))} 
          }
          />

          <InputMUI 
          value = {email} 
          label = 'Email' 
          type = 'email' 
          onChange = { () => {
            setEmail(updateArrState(email))} 
          }
          />

          <InputMUI 
          value = {userName} 
          label = 'Username' 
          onChange = { () => {
            setUserName(updateArrState(userName))} 
          }
          />

          <InputMUI 
          value = {password} 
          label = 'Password' 
          type = 'password' 
          onChange = { () => {
            setPassword(updateArrState(password))} 
          }
          />

          <InputMUI 
          value = {confirm} 
          label = 'Confirm Password' 
          type = 'password' 
          onChange = { () => {
            setConfirm(updateArrState(confirm))} 
          }
          />

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
 */

export default SignUp