import './url-section-styles/url-section.css'
// import UrlDisplay from './display-short-component'
import SubmitUrl from './submit-url-btn-component';
import { React, useState } from "react";

const UrlInput = ({ authorized, notify }) => {

    const [text, setText] = useState('')
    const [unAuthState, setUnAuthState] = useState('')
    
    const handleInput = (event) => {
        setText(event.target.value)
        if(text.length === 0 && !authorized) {
            setUnAuthState('unAuthorized') 
            notify() //Prop-drilled: Fix with Context
        } else {
            setUnAuthState('') ;
        } 
    }
   
    return (
        <div className='shortener-wrapper'>
            <div className={`input-container ${unAuthState} `}>
                <SubmitUrl inputValue = { text } />
                <input 
                onChange= { handleInput }
                className='input-field' 
                type="search" 
                placeholder={`Enter the URL you'd like to shorten.`}/>
            </div>
        </div>
    )
}

export default UrlInput