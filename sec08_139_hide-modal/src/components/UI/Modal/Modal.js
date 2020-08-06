import React from 'react';
import classes from './Modal.css' 
const Modal = (props) => {
    console.log ('Modal => props:', props)
    return (
        <div 
            className={classes.Modal}
            style={{
                // vh: view height. -100vh slide out side the screen
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0'
            }}
            >
            {props.children}
        </div>
    );
}
 
export default Modal;