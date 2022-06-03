import './url-section-styles/url-section.css'
// import UrlDisplay from './display-short-component'
import SubmitBtn from '../submit-btn-component';
import { React, useState } from "react";

const UrlInput = () => {

    const [text, setText] = useState('')
    const observeInput = event => setText(event.target.value)
   
    return (
        <div className='shortener-wrapper'>
            <div className="input-container">
                <SubmitBtn inputValue = { text } />
                <input className='input-field' onChange = {observeInput} type="search" placeholder={`Enter the URL you'd like to shorten.`}/>
            </div>
        </div>
    )
}

export default UrlInput