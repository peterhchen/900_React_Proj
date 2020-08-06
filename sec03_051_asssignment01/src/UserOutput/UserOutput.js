// Step 2: UserOutput output two paragraphs
import React from 'react';
// Step 10: Add styling of your choice to your components/elements 
// in the components - both with inline styles and stylesheets 
import './UserOutput.css' 
// Step 4: Pass a username (of your choice) to UserOutput 
// via props and display it there.
// Add props for the passing argument.
const UserOutput = (props) => {
    return (
        // Step 10: Add styling of your choice to your components/elements 
        // in the components - both with inline styles and stylesheets 
        <div className = 'UserOutput'>
            {/* Step 4: Pass a username (of your choice) to UserOutput 
             via props and display it there.
             Make sure the { props.userName } is the same 
             userName='Peter' passed from App.js */}
            <p>User Name:  { props.userName }</p>
            <p>Some more random text!</p>
        </div>
    );
}
 
export default UserOutput;