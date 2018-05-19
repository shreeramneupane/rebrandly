import React, { Component } from 'react';

// Material UI component
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

// Component
import Header from '../Header';

// Service
import RebrandlyApi from '../../services/rebrandlyApi';

class LinkEdit extends Component {
  state = {
    id: this.props.match.params.id,
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

  componentWillMount() {
    RebrandlyApi.get(`/links/${this.state.id}`)
    .then(link => {
      this.setState({
        title: link.title,
        destination: link.destination
      })
    })
    .catch(err => alert(err.message))
  }

  onSubmit() {
    const data = {
      title: this.state.title,
      destination: this.state.destination
    }

    RebrandlyApi.post(`/links/${this.state.id}`, {body: data})
    .then(() => {
      this.props.history.push("/links")
    })
    .catch(err => {
      alert(err.message)
    })
  }
}

export default LinkEdit;