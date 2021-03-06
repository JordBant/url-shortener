import { toast } from 'react-toastify';
import { useState, useRef } from 'react';
import EntryPage from './components/pages/entry-page/entry-page-component';
import UserAuthPage from './components/pages/user-auth-page/user-auth-page-component';

import 'react-toastify/dist/ReactToastify.css'; 
import './App-styles/App.css'
import MyToast from './components/toast-notify/toast-notify-component';

const App = () => {
  // state will at some point be influenced by a browser cookie
  const [authorized, setAuthorized] = useState(false)
  // const userAuthRef = useRef()

  // const smoothScroll = () => {
  //   !authorized && userAuthRef.current.scrollIntoView({ behavior: 'smooth' })
  // }
  /**
   * 
   * Forward a ref to to the userAuth page
   * 
   * Create func in App.js that smooth scrolls user page if App.js has !authorized
   * 
   * Execute from urShort input if !authorized
   * 
   */


  //triggers from unauthorized input from urShort Input
  const notify = () => {
    toast.error("For security assurances, you must be a registered and authenticated user to create urShort URL.", { 
      position: toast.POSITION.TOP_RIGHT
    });
  }
  return (
    <div className="App">
      <MyToast/>
      <EntryPage 
        authorized = { authorized } 
        // smoothScroll = { smoothScroll }
        notify = { notify } />
      <UserAuthPage/>
    </div>
  );
}

export default App;
