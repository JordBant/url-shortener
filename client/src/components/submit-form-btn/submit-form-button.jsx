import './submit-form-styles/submit-form.css'
import { useEffect } from "react";

const SubmitFormBtn = ({newUser, buttonName}) => {

  const validateInput = (...newUserObject) =>{
    /**
     * - All inputs must not be empty
     * -------------------------------- *
     * - Email & Username must be valid and non-existing inputs 
     * - Username & Password must contain correct characters and letter-cases
     * - Confirm === Password must be true
     */
  }

  useEffect(() => {
    //onClick Validate Inputs
    //If validation true, will return true & a POST will be made to server,
    //Else, will return false and update the undefined index of input 
    //to a boolean value. 
    //Make a Post request to the server
  }, [])
  

  return (
    <button className = 'submit-form-btn' > {buttonName} </button>
  )
}

export default SubmitFormBtn