// Step 2: UserInput hold an element
import React from 'react';
// Step 7: Pass the event-handler method reference to the 
// UserInput component and bind it to the input-change event
const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    }
    return (
        <div>
        { /* 
        Step 7-8: onChange = { props.cahnged } 
        Pass the event-handler method reference to the 
        UserInput component and bind it to the input-change event
        onChange={props.changed}
        Step 9: value = { props.curentName }
        Ensure that the new input entered by the user overwrites 
        the old username passed to UserOutput 
        Step 10: Add styling of your choice to your components/elements 
        in the components - both with inline styles and stylesheets 
         */}
            <input type='text'
            style = { inputStyle } 
            onChange = { props.changed } 
            value = { props.currentName }    
            />
        </div>
    );
}
 
export default UserInput;