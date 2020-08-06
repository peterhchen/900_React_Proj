import React from 'react';
import Aux from '../../hoc/_Aux'
// import classes from './Layout.css'
import './Layout.css'
const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            {/* <main className ={classes.Content} > */}
            <main className ="Content" >
                {props.children}
            </main>
        </Aux>
    );
}
 
export default Layout;