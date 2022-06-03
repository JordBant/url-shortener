import './url-section/url-section-styles/url-section.css'
import { Fragment, useEffect, useState } from 'react'

const SubmitBtn = ({ inputValue }) => { 
    // const [shortUrl, setShortUrl] = useState('')

    useEffect(() => {
        const getShort = async () => {
            try {
                const response = await fetch('/shortener', {

                    method: 'POST',
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(inputValue)
                })
                const data = await response.json()

            } catch (error) {
                // setShortUrl('Provide valid URL')
            }
        } 
    }, [inputValue])
    

    return (
        <Fragment>
        {
            (inputValue.length) 
            ? <button className= 'submit-btn' />
            : null
        }
        </Fragment>
    )
}

export default SubmitBtn