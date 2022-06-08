import './url-section/url-section-styles/url-section.css'
import { Fragment, useEffect } from 'react'

const SubmitUrl = ({ inputValue }) => { 
    
    useEffect(() => {
        const getShort = async () => {
            try {
                const response = await fetch('/shortener', {

                    method: 'POST',
                    headers: { "Content-Type" : "application/json" },
                    body: JSON.stringify(inputValue)
                })
                const shortenedUrl = await response.json()
                console.log(shortenedUrl)

            } catch (error) {
                console.log(error)
            }
        } 

        getShort()

    }, [inputValue])
    

    return (
        <Fragment>
        {
            (inputValue.length) 
            ? <button className = 'submit-btn' />
            : null
        }
        </Fragment>
    )
}

export default SubmitUrl