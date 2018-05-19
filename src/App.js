import React, { Component } from 'react';

// Router 
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// Material ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import AdminBoard from './components/AdminBoard'
import LinkList from './components/links/LinkList';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" render={() => (<Redirect to="/login" />)} />
            <Route path="/board" component={AdminBoard} />
            <Route path="/links" component={LinkList} /> 
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
