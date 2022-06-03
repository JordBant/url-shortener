import './url-section-styles/url-section.css'
import {React, useState} from 'react'

const UrlDisplay = () => {
    const [display, setDisplay] = useState('')

    return(
        <div className="shortened-url-div">
            <p className="shortened-url"> { display } </p>
            <p className="copy-icon">Copy to Clipboard.</p>
        </div>
    )
}
export default UrlDisplay