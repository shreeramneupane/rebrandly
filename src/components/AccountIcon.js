import React, { Component } from 'react';

import { withRouter } from 'react-router'

// Material UI component
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';

class AccountIcon extends Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><AccountCircleIcon color={"#FFF"}/></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText={ this.props.email } />
        <MenuItem primaryText="Sign out" onClick={() => this.signOut() } />
      </IconMenu>
    )
  }

  signOut() {
    sessionStorage.clear();
    this.props.history.push('/')
  }
}

export default withRouter(AccountIcon);