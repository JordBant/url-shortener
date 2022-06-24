import {React, useState} from 'react'
import SignUp from '../../user-auth-section/signup-component'
import Login from '../../user-auth-section/login-component'
import FormTrigger from '../../user-auth-section/form-trigger-button-component'
import './user-auth-page-styles/user-auth-page.css'

const UserAuthPage = () => {
  const [formType, setFormType] = useState('')
  const clicked = event => event.target
  // const formType = 

  return (
    <div className="user-auth">
      <div className="form-wrapper">
        <SignUp/>
       
      </div>
    </div>
  )
}

export default UserAuthPage