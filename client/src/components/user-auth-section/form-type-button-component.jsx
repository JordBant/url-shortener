import SignUp from './signup-component' 
import Login from './login-component' 
import { Fragment } from 'react';

const FormType = ({active, title, formType, activateForm}) => {
  const isActive = active ? 'active' : '' ;

  const formToRender = (type) => {
    if(active){
      switch (type) {
        case 'SignUp':
          return <SignUp/>
          
        case 'Login':
          return <Login/>
          
        default:
          console.log('Where is the form', formType)
          break;
      }
    } else {
      return ` ${title} `
    }
  }

  return (
      <div 
        className= {`form-container ${isActive}`} 
        onClick={() => activateForm(formType)}
      >
      {
       formToRender(formType)
      }
      </div>
      )
}

export default FormType