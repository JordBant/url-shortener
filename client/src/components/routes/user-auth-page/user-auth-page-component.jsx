import React from 'react'
import SignIn from '../../user-auth-section/sign-in'
import Login from '../../user-auth-section/login-component'
import './user-auth-page-styles/user-auth-page.css'

function UserAuthPage() {
  return (
    <div className="userAuth">
      <SignIn/>
      <Login/>
    </div>
  )
}

export default UserAuthPage