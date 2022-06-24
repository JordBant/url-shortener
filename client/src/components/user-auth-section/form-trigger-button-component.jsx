import {React, useState} from 'react'

const FormType = ({title}) => {
    const [form, setForm] = useState(false)
    
  return (
      <div className='form-trigger' >{title}</div>
      )
}

export default FormType