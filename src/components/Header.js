import React, { Component } from 'react';

// Router
import { Link } from 'react-router-dom';

// Material ui Component
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

//Component
import AccountIcon from './AccountIcon';

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
          <Link to="/board"><MenuItem primaryText="Home" /></Link>
          <Link to="/links"><MenuItem primaryText="List Link" /></Link>
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