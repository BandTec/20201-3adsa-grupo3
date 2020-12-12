import React from 'react'

export default function Alerta(props) {
   
    return (
        <React.Fragment>
            <div className={props.isSuccess ? "display-block txtal-center bg-color-green font-color-white width-50pg height-48p":"display-none"}>{props.message}</div>
            <div className={props.isError ? "display-block txtal-center bg-color-red font-color-white width-50pg height-48p":"display-none"}>{props.message}</div>
        </React.Fragment>
    )
}