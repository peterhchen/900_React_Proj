import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo' 
const Toolbar = (props) => {
    return (
        <div>
        <header className={classes.Toolbar}>
            <div>MENU</div>
            {/* <div>LOGO</div> */}
            <Logo />
            <nav>
                ...
            </nav>
        </header>
        </div>
    );
}
 
export default Toolbar;