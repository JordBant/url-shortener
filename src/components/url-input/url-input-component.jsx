import React from 'react'
import './url-input-styles/url-input.css'
 
const deleteInputText = () => {
    
}

const UrlShort = () => {
    return(
        <div className="shortened-url-div">
            <p className="shortened-url"> ShortenedURL.uihsdf</p>
            <p className="copy-icon">Copy to Clipboard.</p>
        </div>
    )
}

const UrlInput = () => {
    return (
        <div className='shortener-wrapper'>
            <div className="input-container">
                <input className='input-field' type="search" placeholder={`Enter the URL you'd like to shorten`}/>
                <div 
                className="close-button"
                onClick={ deleteInputText }/>
            </div>
            <UrlShort/>
        </div>
    )
}

export default UrlInput