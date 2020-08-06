import React from 'react';
import classes from './Backdrop.css'

const Backdrop = (props) => {
    console.log ('Backdrop =>props:', props)
    return (
        props.show ? <div className={classes.Backdrop} 
        onClick={props.clicked} ></div> : null
    );
}
 
export default Backdrop;