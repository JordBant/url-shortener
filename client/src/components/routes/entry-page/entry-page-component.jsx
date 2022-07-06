import Particle from '../../Particles'
import './entry-page-styles/entry-page.css'
import UrlInput from '../../url-section/url-input-component'
import { useState } from 'react'

const EntryPage = () => {
  const [authorized, setAuth] = useState(false)
  if(!authorized){
    //trigger toast one level up
    //send css class a level down
  }

  return (
    <div className="entry-page">
      <UrlInput authorized = { authorized } onChange />
      <Particle className = "particle-background" />
    </div>
  );
}

export default EntryPage;
