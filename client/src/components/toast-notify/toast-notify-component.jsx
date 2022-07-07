import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css'; 
import './toast-notify-styles/toast-notify.css'; 

const MyToast = () => {
  return (
    <Fragment>
      <ToastContainer limit={3}/>
    </Fragment>
  );
}

export default MyToast