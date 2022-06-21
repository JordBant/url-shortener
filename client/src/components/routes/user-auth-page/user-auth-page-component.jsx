import {React, useState} from 'react'
import SignUp from '../../user-auth-section/signup-component'
import Login from '../../user-auth-section/login-component'
import './user-auth-page-styles/user-auth-page.css'

const UserAuthPage = () => {
  // const [formType, setFormType] = useState('')
  // const handleForm =  setFormType(() => 'Sign Up')

  return (
    <div className="user-auth">
      <div className="form-wrapper">
        <SignUp/>
      </div>
    </div>
  )
}

export default UserAuthPage