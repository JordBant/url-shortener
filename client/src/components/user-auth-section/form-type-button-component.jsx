import SignUp from './signup-component' 
import Login from './login-component' 

const FormType = ({active, title, formType, activateForm}) => {
  const isActive =  active ? 'active' : '' ;
  const mountForm = (formType) => {
    switch (formType) {
      case 'Create':
        <SignUp/>
        break;
      case 'Login':
        <Login/>
        break;
    
      default:
        break;
    }
  }

  return (
      <div 
        className= {`form-container ${isActive}`} 
        onClick={() => activateForm(formType)}
      >
    
      <SignUp/>
        {
          active
          ? mountForm(formType)
          : title
  
        }
      </div>
      )
}

export default FormType