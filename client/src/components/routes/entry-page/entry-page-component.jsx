import Particle from '../../Particles'
import '../../../App-styles/App.css'
import UrlInput from '../../url-section/url-input-component'

const EntryPage = () => {
  return (
    <div className="entry-page">
    <UrlInput/>
    <Particle className = "particle-background" />
    </div>
  );
}

export default EntryPage;
