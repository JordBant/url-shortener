import './submit-form-styles/submit-form.css'

const SubmitFormBtn = ({newUserObject: user, buttonName, formType}) => {

  const postSensitives = async () => {
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
    <button onClick={ postSensitives } className = 'submit-form-btn' > {buttonName} </button>
  )
}

export default SubmitFormBtn