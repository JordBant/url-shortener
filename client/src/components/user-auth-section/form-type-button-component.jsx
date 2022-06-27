import SignUp from './signup-component' 
import Login from './login-component' 
import { useTransition } from 'react-spring';

const FormType = ({active, title, formType, activateForm}) => {
  const isActive =  active ? 'active' : '' ;

  const formToRender = () => {
    // eslint-disable-next-line default-case
    switch (formType) {
      case 'Create':
        <SignUp/>
        break;
      case 'Login':
        <Login/>
        break;
    }
  }

  return (
      <div 
        className= {`form-container ${isActive}`} 
        onClick={() => activateForm(formType)}
      >
      {
        active 
        ? <SignUp/>
        : title
      }
      </div>
      )
}

export default FormType