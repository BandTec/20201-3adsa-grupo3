import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class AlertCard extends React.Component {

    constructor(props) {
        super(props);
    }

    fecharAlerta = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.onClose();
    };

    render() {
        return (
            <Snackbar open={this.props.open} autoHideDuration={6000} onClose={this.fecharAlerta}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
                <Alert onClose={this.fecharAlerta} severity={this.props.severity}>
                    {this.props.message}
                </Alert>
            </Snackbar>
        );
    }
}