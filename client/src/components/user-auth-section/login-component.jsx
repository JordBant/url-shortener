import InputMUI from "../mui-input-component"
import SubmitFormBtn from "../submit-form-btn/submit-form-button"
import {useState ,React, Fragment} from "react"

const Login = () => {
  const [email, setEmail] = useState(['', null])
  const [password, setPassword] = useState(['', null])
  const candidate = {
    email,
    password
  }

  const updateArrState = (stateArr, event) => {
    const clonedArr = [event.target.value, stateArr[1]]
    console.log(`Here: ${clonedArr} from form login`)

    return clonedArr
  }

  return (
    <Fragment>
      <div className="form">
        <h1 className="form-title">Login</h1>
        
        <InputMUI 
        label = 'Email' 
        type = 'email'
        stateValue = { email }
        handleChange = { updateArrState } 
        updateParentState = { setEmail }
        />

        <InputMUI 
        label = 'Password' 
        type = 'password'
        stateValue = { password }
        handleChange = { updateArrState } 
        updateParentState = { setPassword }
        />

        <SubmitFormBtn 
        buttonName = 'Log In' 
        newUserObject= { candidate }
        uriType = 'login'
        />
      </div>
    </Fragment>
  )
}

export default Login