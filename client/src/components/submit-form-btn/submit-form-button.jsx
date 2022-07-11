import './submit-form-styles/submit-form.css'
import { Fragment, useState } from 'react'

const SubmitFormBtn = ({newUserObject: user, buttonName, uriType}) => {

  /**
   * 
   * The formBtn will send the new user to the backend onClick if it is a fully completed form
   * 
   * The response will be an updated object that has a true or false boolean depending
   * on if any tests passed or failed for the respective information.
   * 
   * The res.json() will contain the object with arrays of our 
   * validation status and will update the state of of the formBtn
   * 
   */

  const [showError, setShowError] = useState(false)
  
  const checkForFullForm = (candidate) => {
    // All values in object are not empty execute postUserInfo
  }

  const postUserInfo = async () => {    

    //Set showError if this function runs at all
    showError && setShowError(false)

    try {
      const res = await fetch(`./form/:${uriType}`, {

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
    <Fragment>
      <button onClick={ checkForFullForm(user) } className = 'submit-form-btn' > {buttonName} </button>
      {showError && <small className='btn-error-message'> Please fill out the incomplete fields </small>}
    </Fragment>
  )
}

export default SubmitFormBtn