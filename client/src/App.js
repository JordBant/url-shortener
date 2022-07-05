import './App-styles/App.css'
import EntryPage from './components/routes/entry-page/entry-page-component';
import UserAuthPage from './components/routes/user-auth-page/user-auth-page-component';
import MyToast from './components/toast-notify/toast-notify-component';

const App = () => {

  return (
    <div className="App">
      <MyToast/>
      <EntryPage/>
      <UserAuthPage/>
    </div>
  );
}

export default App;
