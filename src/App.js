import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import NumericInput from './TextVariations/numeric'
import EmailInput from './TextVariations/email'
import StringInput from './TextVariations/text'
import PhoneInput from './TextVariations/phone'

/* here is an expamle how to use components and how to pass props to them  */

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div className="flex-container">

              <NumericInput
                errorText="Irrtum"
                successText="Erfolg"
              >Numeric Input:</NumericInput>
              <EmailInput
                  errorText="Error"
                  successText="Exito"
              >Email Input:</EmailInput>
              <StringInput>String Input:</StringInput>
              <PhoneInput>Phone(+XXX XX XX XX XXX):</PhoneInput>

          </div>
      </div>
    );
  }
}

export default App;
