// Step 3: Output multiple UserOutput components in the 
// App component (any paragraph texts of your choice)
import './App.css';
import React, { Component } from 'react'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  // Step 5: Add state to the App component (=> the username) and 
  // pass the username to the UserOutput component
  state = {
    username: 'Initialize default state => Peter'
  }

  // Step 6: Add a method to manipulate the state 
  // (=> an event-handler method) 
  usernameChangedHandler = (event) => {
    console.log ('event:', event)
    this.setState({ username: event.target.value } )
  }
  render() {
     return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        {/* 
        Step 7-8: changed = { this.usernameChangedHandler }
        Pass the event-handler method reference to the 
        UserInput component and bind it to the input-change event 
        changed={this.usernameChangedHandler}
        Step 9: currentName = { this.state.username }
        Ensure that the new input entered by the user overwrites 
        the old username passed to UserOutput
        */}
        <UserInput 
          changed = { this.usernameChangedHandler } 
          currentName = { this.state.username }
        />
        {/* Step 4: Pass userName='Peter' 
          Step5: Add state to the App component (=> the username) and 
          pass the username to the UserOutput component
        */}
        <UserOutput userName= { this.state.username } />
        <UserOutput userName= { this.state.username } />
        <UserOutput userName='Peter' />
      </div>
    )
  }
}
export default App
