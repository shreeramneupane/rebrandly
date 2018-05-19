import React, { Component } from 'react';

// Router 
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// Material ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import AdminBoard from './components/AdminBoard'
import LinkCreate from './components/links/LinkCreate'
import LinkList from './components/links/LinkList'
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
            <Route exact path="/links" component={LinkList} /> 
            <Route path="/links/new" component={LinkCreate} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
