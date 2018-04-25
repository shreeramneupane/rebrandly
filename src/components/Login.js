import React,  { Component } from 'react';

import logo from '../assets/logo-blue.svg';

// Matrial UI component
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
  alignCenter = {
    height: "100vh",          
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  cardWidth = {
    width: "500px"
  }

  floatActionButtonRight = {
    float: "right"
  }

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  render () {
    return (
      <div style={this.alignCenter}>
        <Card style={this.cardWidth}>
          <CardHeader
            title="Rebrandly"
            subtitle="View on your rebrandly resource!!!"
            avatar={logo}
          />
          <CardTitle title="Login"/>
          <CardText>
            <TextField
              type="email"
              fullWidth={true}
              floatingLabelText="Email Address"
              value={this.state.email}
              onChange={ (e) => this.onChangeEmail(e) }
            />
            <TextField
              type="password"
              fullWidth={true}
              floatingLabelText="API Key"
              value={this.state.password}
              onChange={ (e) => this.onChangePassword(e) }
            />
          </CardText>
          <CardActions style={this.floatActionButtonRight}>
            <RaisedButton label="Submit" primary={true} onClick={ () => this.submitForm() }/>
          </CardActions>
        </Card>
      </div>
    )
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  submitForm() {
    
  }
}

export default Login;