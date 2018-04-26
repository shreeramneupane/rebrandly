import React,  { Component } from 'react';

import logo from '../assets/logo-blue.svg';

// Matrial UI component
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Service
import RebrandlyApi from '../services/rebrandlyApi';

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
      apikey: ''
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
              value={this.state.apikey}
              onChange={ (e) => this.onChangeApikey(e) }
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

  onChangeApikey(e) {
    this.setState({
      apikey: e.target.value
    })
  }

  submitForm() {
    this.getAccountDetail(this.state.apikey)
    .then(account => {
      if(account.email === this.state.email) {
        sessionStorage.setItem('apikey', this.state.apikey)
        sessionStorage.setItem('email', this.state.email)
        this.props.history.push('/board')
      }
      else {
        alert('Credentail mis match')
      }
    })
    .catch(error => {
      alert(error.message)
    })
  }

  getAccountDetail(apikey) {
    return RebrandlyApi.get('/account', {headers: {apikey: apikey}})
  }

  componentWillMount() {
    const apikeySession = sessionStorage.getItem('apikey')
    if(apikeySession) {
      this.getAccountDetail(apikeySession)
      .then(account => {
        if(account) {
          this.props.history.push('/board')
        }
      })
      .catch(error => {
        sessionStorage.removeItem('apikey')
      })
    }
  }
}

export default Login;