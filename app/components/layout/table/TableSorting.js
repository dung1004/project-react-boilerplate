import React, { Component } from 'react';
import MaterialTable from 'material-table';
// eslint-disable-next-line prettier/prettier
import { Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import axios from 'axios';

class TableSorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      // eslint-disable-next-line react/no-unused-state
      text: '',
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      this.setState({ arr: res.data });
    });
  }

  render() {
    const { arr } = this.state;
    return (
      <MaterialTable
        title="Basic Sorting Preview"
        columns={[
          {
            title: 'View INfo',
            render: rowData => (
              // eslint-disable-next-line prefer-template
              <Link component={RouterLink} to={'info/id=' + rowData.id}>
                View Info
              </Link>
            ),
          },
          { title: 'ID', field: 'id' },
          { title: 'NAME', field: 'name' },
          {
            title: 'USERNAME',
            field: 'username',
            render: rowData => {
              if (rowData.username.length > 8) {
                return (
                  <span style={{ color: 'seagreen' }}>{rowData.username}</span>
                );
              }
              return rowData.username;
            },
          },
          { title: 'PHONE', field: 'phone' },
          { title: 'EMAIL', field: 'email', type: 'numeric' },
        ]}
        data={arr.map(value => value)}
      />
    );
  }
}

export default TableSorting;
