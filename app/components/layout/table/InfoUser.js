/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-var */
/* eslint-disable prefer-template */
/* eslint-disable vars-on-top */
/* eslint-disable indent */
/* eslint-disable react/no-unused-state */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prefer-stateless-function
class InfoUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      arr: []
    }
  }
 
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      this.setState({ arr: res.data });
    });
  }
 
  render() {
    // console.log(this.props.location.pathname.substr(0, 9));
    
     // eslint-disable-next-line radix
    // eslint-disable-next-line no-var
    var idString = this.props.location.pathname;
    var kq = idString.match(/\d/g);

    var  idUrl = parseInt(kq);
        

    // var idUrl = parseInt(this.props.location.pathname.slice(9, 1000));
    // eslint-disable-next-line no-var

    const { arr } = this.state;
    return (
      <div>
        <ul>
          {
            // eslint-disable-next-line consistent-return
            arr.map((value) => {
              if(value.id === idUrl) {
                return (
                  <div>
                     <li>Id là: <b style={{color: 'red'}}>{value.id}</b></li>
                     <li>name là: <b style={{color: 'red'}}>{value.name}</b></li>
                     <li>username là: <b style={{color: 'red'}}>{value.username}</b></li>
                     <li>email là: <b style={{color: 'red'}}>{value.email}</b></li>
                  </div>
                 
                )
                
              }
            })
          }
        </ul>
      </div>
    );
  }
}

export default InfoUser;