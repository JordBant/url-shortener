import {React, useState} from 'react'
import SignUp from '../../user-auth-section/signup-component'
import Login from '../../user-auth-section/login-component'
import FormTrigger from '../../user-auth-section/form-trigger-button-component'
import './user-auth-page-styles/user-auth-page.css'

const UserAuthPage = () => {
  // const [formType, setFormType] = useState('')
  // const handleForm =  setFormType(() => 'Sign Up')

  return (
    <div className="user-auth">
      <div className="form-wrapper">
        <FormTrigger title = 'Create Account'/>
        <div className="divider"/>
        <Login/>
      </div>
    </div>
  )
}

export default UserAuthPage