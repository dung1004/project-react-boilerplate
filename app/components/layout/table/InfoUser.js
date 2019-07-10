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
    var idUrl = parseInt(this.props.location.pathname.slice(9, 1000));
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
                  "Id là: " +  value.id + "; Name là: "+ value.name + "; UserName là: " + value.username + "; Email là: " + value.email 
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