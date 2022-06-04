import './App-styles/App.css'
// import EntryPage from './components/routes/entry-page/entry-page-component';
import UserAuthPage from './components/routes/user-auth-page/user-auth-page-component';

const App = () => {
  return (
    <div className="App">
      <UserAuthPage/>
    </div>
  );
}

export default App;
