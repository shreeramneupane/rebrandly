import React, { Component } from 'react';

// Material UI component
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

// Component
import Header from '../Header';

class LinkCreate extends Component {
  render() {
    return (
      <div>
        <Header />

        <Card style={{margin: "20px 10px 0 10px"}}>
          <CardHeader
            title={<strong>Create New Link</strong>}
          />
          <CardText>
            <TextField
              style={{width: "100%"}}
              floatingLabelText="Title"
            /><br />
            <TextField
              style={{width: "100%"}}
              floatingLabelText="Destination URL"
            />
          </CardText>
          <CardActions>
            <FlatButton label="Submit" />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default LinkCreate;