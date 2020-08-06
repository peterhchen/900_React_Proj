import React from 'react';
import classes from './Button.css' 
const Button = (props) => {
    return (
        <button 
            // Button is default class, btnType is the selection of 
            // danger or Success
            className={classes.Button, classes[props.btnType]} 
            onClick={props.clicked}>
            {props.children}
        </button>
    );
}
 
export default Button;