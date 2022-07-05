import { ToastContainer, toast } from 'react-toastify';
import { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css'; 
import './toast-notify-styles/toast-notify.css'; 
import { containerClasses } from '@mui/system';

const MyToast = () => {
  const toastConfig = { 
    position: toast.POSITION.TOP_RIGHT,
  }

  const notify = () => {
    toast.error("For security assurances, you must be a registered and authenticated user to create urShort URL.", toastConfig);
  }

  return (
    <Fragment>
      <ToastContainer autoClose = {5000} limit = {1} />
      <button onClick={notify}>Notify!</button>
    </Fragment>
  );
}

export default MyToast