import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alertt(props) {
  

  return (
  
      
      
    props.alert!=null && 
    <Snackbar open={true} autoHideDuration={6000} >
        <Alert  severity={props.alert.type} sx={{ width: '100%' }}>
          {props.alert.message}
        </Alert>
    </Snackbar>
      
    
  );
}