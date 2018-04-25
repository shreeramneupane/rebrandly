import React, { Component } from 'react';

// Material ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Login />
      </MuiThemeProvider>
    );
  }
}

export default App;
