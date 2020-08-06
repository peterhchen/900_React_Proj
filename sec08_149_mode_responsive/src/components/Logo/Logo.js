import React from 'react';
// To direct the webpack where is the image.
// The webpack move otehr location for image for optimization.
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'
 
const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt='MyBurger' />
        </div>
    );
}
 
export default Logo;