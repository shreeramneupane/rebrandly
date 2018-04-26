import React, { Component } from 'react';

// Material ui Component
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

//Component
import AccountIcon from './AccountIcon'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarOpen: false,
      email: ''
    }
  }

  render() {
    return (
      <div>
        <AppBar 
          title="Rebrandly"
          iconElementRight={ <AccountIcon email={ this.state.email } />}
          onLeftIconButtonClick = {() => this.toggleSidebar()}
        />
        <Drawer 
        open={ this.state.sidebarOpen }
        docked={false}
        onRequestChange = {() => this.toggleSidebar()}
        >
          <MenuItem>Home</MenuItem>
          <MenuItem>First</MenuItem>
        </Drawer>
      </div>
    )
  }

  toggleSidebar() {
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }

  componentWillMount() {
    this.setState({
      email: sessionStorage.getItem('email')
    })
  }
}

export default Header;