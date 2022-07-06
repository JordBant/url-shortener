import {React, useState} from 'react'
import FormType from '../../user-auth-section/form-type-button-component'
import './user-auth-page-styles/user-auth-page.css'

const UserAuthPage = () => {
  const [activeCreate, setActiveCreate] = useState(false)
  const [activeLogin, setActiveLogin] = useState(false)

  const activateForm = (activeFormType) => {
    switch (activeFormType) {
      case 'Login':
        setActiveCreate(false)
        setActiveLogin(true)
        break;

      case 'SignUp':
        setActiveCreate(true)
        setActiveLogin(false)
        break;
    
      default:
        break;
    }
  }

  return (
    <div className="user-auth">
      <div className="form-wrapper">
        <FormType
          active = { activeCreate } 
          formType = 'SignUp' 
          activateForm = { activateForm } 
          title = 'Create Account'
        />

        <FormType 
          active = { activeLogin } 
          formType = 'Login' 
          activateForm = { activateForm } 
          title = 'Log In'
        />
      </div>
    </div>
  )
}

export default UserAuthPage