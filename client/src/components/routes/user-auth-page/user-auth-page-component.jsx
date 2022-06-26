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
        console.log('l')
        break;

      case 'Create':
        setActiveCreate(true)
        setActiveLogin(false)
        console.log('c')
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
          formType = 'Create' 
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