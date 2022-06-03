import './url-input-styles/url-input.css'
// import { React, useState } from "react";

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
                <input className='input-field' type="search" placeholder={`Enter the URL you'd like to shorten.`}/>
            </div>
            <UrlShort/>
        </div>
    )
}

export default UrlInput