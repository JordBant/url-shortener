import React from "react";

const FormType = ({active, title, formType, activateForm}) => {
  const isActive =  active ? 'active' : '' ;

  return (
      <div 
        className= {`form-container ${isActive}`} 
        onClick={() => activateForm(formType)}
      >
        {title}
      </div>
      )
}

export default FormType