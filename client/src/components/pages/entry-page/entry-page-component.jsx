import Particle from '../../Particles'
import './entry-page-styles/entry-page.css'
import UrlInput from '../../url-section/url-input-component'

// Authorized and Notify are both prop-drilled into URL: fix by practicing composition
const EntryPage = ({ authorized, notify }) => {
  return (
    <div className="entry-page">
      <UrlInput authorized = { authorized } notify = {notify} />
      <Particle className = "particle-background" />
    </div>
  );
}

export default EntryPage;
