import './url-input-styles/url-input.css'
import { React, useState, useEffect } from "react";

const UrlShort = () => {
    const [display, setDisplay] = useState('')

    return(
        <div className="shortened-url-div">
            <p className="shortened-url"> { display } </p>
            <p className="copy-icon">Copy to Clipboard.</p>
        </div>
    )
}

const UrlInput = () => {

    useEffect(() => {
        const sendURL = async () =>{
            const data = fetch() //fetch to backend as a post
        }

        sendURL()
    }, [])

    return (
        <div className='shortener-wrapper'>
            <div className="input-container">
                <input className='input-field' type="search" placeholder={`Enter the URL you'd like to shorten.`}/>
            </div>
            <UrlShort shortUrl/>
        </div>
    )
}

export default UrlInput