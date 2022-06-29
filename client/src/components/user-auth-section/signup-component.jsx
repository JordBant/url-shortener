import {Fragment, React, useState} from 'react'
import InputMUI from '../mui-input-component'
import SubmitFormBtn from '../submit-form-btn/submit-form-button'

const SignUp = () => {
  //For Form Validation 

  const [firstName, setFirstName] = useState(['iu', null])
  const [lastName, setLastName] = useState(['', null])
  const [userName, setUserName] = useState(['', null])
  const [email, setEmail] = useState(['', null])
  const [password, setPassword] = useState(['', null])
  const [confirm, setConfirm] = useState(['', null])

  const updateArrState = (stateArr, event) => {
    const clonedArr = [event.target.value, stateArr[1]]
    console.log(`Here: ${clonedArr}`)
    return clonedArr
  }

  const isStill = firstName !== 'iu' ? true : false
  const notify = state => isStill && console.log(`new state ${state} `)
  notify(firstName)

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
          <InputMUI 
          stateValue = { firstName }
          label = 'First Name'
          handleChange = { updateArrState } 
          updateParentState = { setFirstName }
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