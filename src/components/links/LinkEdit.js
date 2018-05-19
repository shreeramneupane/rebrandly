import React, { Component } from 'react';

// Material UI component
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

// Component
import Header from '../Header';

class LinkEdit extends Component {
  state = {
    title: '',
    destination: ''
  }

  render() {
    return (
      <div>
        <Header />

        <Card style={{margin: "20px 10px 0 10px"}}>
          <CardHeader
            title={<strong>Edit Link</strong>}
          />
          <CardText>
            <TextField
              style={{width: "100%"}}
              floatingLabelText="Title"
              value={this.state.title}
              onChange={(e) => {this.setState({title: e.target.value})}}
            /><br />
            <TextField
              style={{width: "100%"}}
              floatingLabelText="Destination URL"
              value={this.state.destination}
              onChange={(e) => {this.setState({destination: e.target.value})}}
            />
          </CardText>
          <CardActions>
            <FlatButton label="Submit" onClick={() => this.onSubmit()}/>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default LinkEdit;