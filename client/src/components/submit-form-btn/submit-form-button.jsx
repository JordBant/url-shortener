import './submit-form-styles/submit-form.css'
import { Fragment, useState } from 'react'

const SubmitFormBtn = ({newUserObject: candidate, buttonName, uriType}) => {

  /**
   * 
   * The formBtn will send the new candidate to the backend onClick if it is a fully completed form
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
    let attendance = 0
    const candidateArr = Object.keys(candidate).length

    for (const field in candidate) {
      const temp = candidate[field][0].trim()
      if(temp.length > 0) attendance++
    }
    attendance === candidateArr 
    ? postUserInfo() 
    : setShowError(true) 
  }

  const postUserInfo = async () => {    
    showError && setShowError(false)

    try {
      console.log(candidate)
      const res = await fetch(`./form/:${uriType}`, {

          method: 'POST',
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({ value: candidate })

          })
          const formTestStatus = await res.json()

        } catch (error) {
          console.log(error)
        }
      }  

  return (
    <Fragment>
      {showError && <small className='form-error-message'> Please fill out the incomplete fields </small>}
      <button onClick={() => checkForFullForm(candidate) } className = 'submit-form-btn' > {buttonName} </button>
    </Fragment>
  )
}

export default SubmitFormBtn