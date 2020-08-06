import React from 'react';
import classes from './Modal.css' 
import Aux from '../../../hoc/_Aux'
import Backdrop from '../Backdrop/Backdrop'
const Modal = (props) => {
    console.log ('Modal => props:', props)
    return (
        <Aux>
            <Backdrop show={props.show} clicked={ props.modalClosed } />
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
        </Aux>
    );
}
 
export default Modal;