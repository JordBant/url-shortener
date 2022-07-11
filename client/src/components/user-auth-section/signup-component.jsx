import { Fragment, React, useState } from 'react'
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

  const candidate = {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirm
  }

  const updateArrState = (stateArr, event) => {
    const clonedArr = [event.target.value, stateArr[1]]
    console.log(`Here: ${clonedArr}`, candidate)

    return clonedArr
  }

  // const isStill = firstName !== 'iu' ? true : false
  // const notify = state => isStill && console.log(`new state ${state} `)
  // notify(firstName)

  return (
      <Fragment>
        <div className="form">
          <h1 className="form-title">Sign Up</h1>

          <InputMUI 
          stateValue = { firstName }
          label = 'First Name'
          handleChange = { updateArrState } 
          updateParentState = { setFirstName }
          />

          <InputMUI 
          stateValue = {lastName} 
          label = 'Last Name' 
          handleChange = { updateArrState } 
          updateParentState = { setLastName }
          />

          <InputMUI 
          stateValue = {email} 
          label = 'Email' 
          type = 'email' 
          handleChange = { updateArrState } 
          updateParentState = { setEmail }
          />

          <InputMUI 
          stateValue = {userName} 
          label = 'Username' 
          handleChange = { updateArrState } 
          updateParentState = { setUserName }
          />

          <InputMUI 
          stateValue = {password} 
          label = 'Password' 
          type = 'password' 
          handleChange = { updateArrState } 
          updateParentState = { setPassword }
          />

          <InputMUI 
          stateValue = {confirm} 
          label = 'Confirm Password' 
          type = 'password' 
          handleChange = { updateArrState } 
          updateParentState = { setConfirm }
          />

          <SubmitFormBtn 
          buttonName = 'Sign Up' 
          newUserObject= { candidate }
          uriType = 'Create'
          />
        </div>
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