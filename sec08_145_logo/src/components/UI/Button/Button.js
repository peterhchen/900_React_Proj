import React from 'react';
import classes from './Button.css' 
const Button = (props) => {
    console.log ('Button : props =>', props)
    return (
        <button 
            // Button is default class, btnType is the selection of 
            // danger or Success
            // ["Button", "Danger"].join (' ') => "Button Danger"
            className={[classes.Button, classes[props.btnType]].join(' ')} 
            onClick={props.clicked}>
            {props.children}
        </button>
    );
}
 
export default Button;