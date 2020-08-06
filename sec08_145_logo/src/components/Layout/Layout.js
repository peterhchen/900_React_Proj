import React from 'react';

import Aux from '../../hoc/_Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = ( props ) => (
    <Aux>
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;