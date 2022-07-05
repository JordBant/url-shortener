import { ToastContainer, toast } from 'react-toastify';
import { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css'; 
import './toast-notify-styles/toast-notify.css'; 

const MyToast = () => {
  const toastConfig = { 
    position: toast.POSITION.TOP_RIGHT,
  }

  const notify = () => {
    toast.error("For security assurance, you must be an registered and authenticated user to use create urShort URL.", toastConfig);
  }

  return (
    <Fragment>
      <ToastContainer autoClose = {8000} limit = {1} />
      <button onClick={notify}>Notify!</button>
    </Fragment>
  );
}

export default MyToast