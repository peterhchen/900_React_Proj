import React from 'react';
import Logo from '../../Logo/Logo' 
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
const SideDraw = (props) => {
    // do something here.
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
              <Logo />
            </div> 
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}
 
export default SideDraw;