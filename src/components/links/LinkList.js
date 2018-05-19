import React, { Component } from 'react';

// Material Component
import { BottomNavigationItem} from 'material-ui/BottomNavigation';
import EditIcon from 'material-ui/svg-icons/image/edit';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

// Component
import Header from '../Header';

// Service
import RebrandlyApi from '../../services/rebrandlyApi';

class LinkList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      links: []
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Table selectable={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>#</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Destination</TableHeaderColumn>
              <TableHeaderColumn>Short URL</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
          {
          this.state.links.map((link, index) => {
            return(
              <TableRow key={link.id} selectable={false}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{link.title}</TableRowColumn>
                <TableRowColumn>{link.destination}</TableRowColumn>
                <TableRowColumn>{link.shortUrl}</TableRowColumn>
                <TableRowColumn>
                <BottomNavigationItem
                  label="Edit"
                  icon={<EditIcon />}
                  onClick={() => this.props.history.push(`/links/${link.id}/edit`)}
                />
                </TableRowColumn>
              </TableRow>
            )
          })
        }
          </TableBody>
        </Table>
      </div>
    )
  }

  componentWillMount() {
    RebrandlyApi.get('/links')
    .then(links => {
      this.setState({
        links: links
      })
    })
  }
}

export default LinkList;