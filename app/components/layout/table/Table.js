import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

class Tablee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    }

  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      this.setState({ arr: res.data });
    })
  }
  
  render() {
    const {arr} = this.state;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">userName</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              arr.map((as) => (
                <TableRow key={as.id}>
                  <TableCell align="center">{as.id}</TableCell>
                  <TableCell align="center">{as.name}</TableCell>
                  <TableCell align="center">{as.username}</TableCell>
                  <TableCell align="center">{as.email}</TableCell>
                  <TableCell align="center">{as.address.city}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default Tablee;
