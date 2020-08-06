import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo' 
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = (props) => {
    return (
        <div>
        <header className={classes.Toolbar}>
            <div>MENU</div>
            {/* <div>LOGO</div> */}
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav>
                <NavigationItems />
            </nav>
        </header>
        </div>
    );
}
 
export default Toolbar;