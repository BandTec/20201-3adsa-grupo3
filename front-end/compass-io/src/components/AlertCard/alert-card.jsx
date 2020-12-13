import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AlertCard(props) {

    const [state, setState] = React.useState({
      open: true
    });

    const open = state.open;

    const fecharAlerta = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({open: false})
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={fecharAlerta}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <Alert onClose={fecharAlerta} severity={props.severity}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}