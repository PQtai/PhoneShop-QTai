import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Notification = ({
  openNotification,
  notificationMessage,
  setOpenNotification,
  message
})=> {
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenNotification(false);
    };
  
    return (
        <>
        <Snackbar open={openNotification} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={notificationMessage} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        </>
    );
  }
export default Notification;
