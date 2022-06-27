import Particle from '../../Particles'
import '../../../App-styles/App.css'
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
