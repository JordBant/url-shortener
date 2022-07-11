import './submit-form-styles/submit-form.css'
import { useState } from 'react'

const SubmitFormBtn = ({newUserObject: user, buttonName, uriType}) => {

  /**
   * 
   * The formBtn will send the new user to the backend onClick
   * 
   * The response will be an updated object that has a true or false boolean depending
   * on if any tests passed or failed for the respective information.
   * 
   * The res.json() will contain the object with arrays of our 
   * validation status and will update the state of of the formBtn
   * 
   */

  const [send, setSend] = useState(false)
  const formType = send ? uriType : ''

  const postUserInfo = async (event) => {
    event.preventDefault(event)
    
    try {
      const res = await fetch(`./form/:${formType}`, {

          method: 'POST',
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({ value: user })

          })
          const formTestStatus = await res.json()

        } catch (error) {
          console.log(error)
        }
      }  

  return (
    <button onClick={ postUserInfo } className = 'submit-form-btn' > {buttonName} </button>
  )
}

export default SubmitFormBtn