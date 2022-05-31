 import React from 'react'
 import UrlShort from '../url-shortened/url-shortened-component'
 import './url-input-styles/url-input.css'
 
 function UrlInput() {
   return (
     <div className='shortener-wrapper'>
        <input className='input-field' type="search" placeholder={`Enter the URL you'd like to shorten`}/>
     </div>
   )
 }
 
 export default UrlInput