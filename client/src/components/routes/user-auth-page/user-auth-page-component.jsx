import React from 'react'
import SignUp from '../../user-auth-section/signup-component'
import Login from '../../user-auth-section/login-component'
import './user-auth-page-styles/user-auth-page.css'

function UserAuthPage() {
  return (
    <div className="userAuth">
      <div className="form-wrapper">
        <SignUp/>
        <Login/>
      </div>
    </div>
  )
}

export default UserAuthPage