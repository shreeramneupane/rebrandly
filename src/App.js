import React, { Component } from 'react';

// Material ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
        <Body />
      </MuiThemeProvider>
    );
  }
}

export default App;
