import Particle from "./components/Particles";
import './App-styles/App.css'
import UrlInput from "./components/url-section/url-input-component";

const App = () => {
  return (
    <div className="App">
      <UrlInput/>
      <Particle className = "particle-background" />
    </div>
  );
}

export default App;
