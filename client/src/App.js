import { toast } from 'react-toastify';
import { useState, Fragment } from 'react';
import EntryPage from './components/routes/entry-page/entry-page-component';
import UserAuthPage from './components/routes/user-auth-page/user-auth-page-component';

import 'react-toastify/dist/ReactToastify.css'; 
import './App-styles/App.css'
import MyToast from './components/toast-notify/toast-notify-component';

const App = () => {
  // state will at some point be influenced by a browser cookie
  const [authorized, setAuthorized] = useState(false)

  //triggers from unauthorized input from urShort Input
  const notify = () => {
    toast.error("For security assurances, you must be a registered and authenticated user to create urShort URL.", { 
      position: toast.POSITION.TOP_RIGHT
    });
  }
  return (
    <div className="App">
      <MyToast/>
      <EntryPage authorized = { authorized } notify = { notify } />
      <UserAuthPage/>
    </div>
  );
}

export default App;
