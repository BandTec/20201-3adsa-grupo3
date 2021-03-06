import React, { useEffect } from 'react'

export default function Alerta(props) {

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         var msg = document.getElementById("alertArea");
    //         msg.remove();   
    //     }, 1000);
    //     return () => clearTimeout(timer);
    //   }, []);

    return (
        <React.Fragment>
            <div className={props.isSuccess ? "display-block txtal-center bg-color-green font-color-white width-10pg height-48p":"display-none"}>{props.message}</div>
            <div className={props.isError ? "display-block txtal-center bg-color-red font-color-white width-10pg height-48p":"display-none"}>{props.message}</div>
        </React.Fragment>
    )
}