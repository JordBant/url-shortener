import {React, useState} from 'react'
import SignUp from '../../user-auth-section/signup-component'
import Login from '../../user-auth-section/login-component'
import FormType from '../../user-auth-section/form-type-button-component'
import './user-auth-page-styles/user-auth-page.css'

const UserAuthPage = () => {
  const [activeCreate, setActiveCreate] = useState(false)
  const [activeLogin, setActiveLogin] = useState(false)

  const activateForm = (activeFormType) => {
    switch (activeFormType) {
      case 'Login ':
        setActiveCreate(false)
        setActiveLogin(true)
        console.log(activeFormType + 'should be Login')
        break;

      case 'Create ':
        setActiveCreate(true)
        setActiveLogin(false)
        console.log(activeFormType + 'should be Create')
        break;
    
      default:
        break;
    }
  }

  /**
   * On click, the child comp will send its prop into the 
   * activate form function in its parent.
   */

  return (
    <div className="user-auth">
      <div className="form-wrapper">
        <FormType
          active = {activeCreate} 
          formType = 'Create' 
          activateForm = { activateForm } 
          title = 'Create Account'
        />

        <FormType 
          active = {activeLogin} 
          formType = 'Login' 
          activateForm = { activateForm } 
          title = 'Log In' 
        />
      </div>
    </div>
  )
}

export default UserAuthPage