import './url-section-styles/url-section.css'
// import UrlDisplay from './display-short-component'
import SubmitUrl from './submit-url-btn-component';
import { React, useState } from "react";

const UrlInput = () => {

    const [text, setText] = useState('')
    const [unAuth, setUnAuth] = useState(false)
    
    const handleInput = (event) => setText(event.target.value)
    
    const unAuthorized = text ? 'unAuthorized' : ''
   
    return (
        <div className='shortener-wrapper'>
            <div className={`input-container ${unAuthorized} `}>
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