import Particle from '../../Particles'
import './entry-page-styles/entry-page.css'
import UrlInput from '../../url-section/url-input-component'
import { useState } from "react";

const EntryPage = () => {
  // const [inView, setInView] = useState(false)

  return (
    <div className="entry-page">
      <UrlInput/>
      <Particle className = "particle-background" />
    </div>
  );
}

export default EntryPage;
