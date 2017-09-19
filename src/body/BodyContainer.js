import React, { Component } from 'react';
import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import BeachList from './BeachList'


class BodyContainer extends Component {
  render(){
    if (!this.props.isLoggedIn) {
      return(
        <div className='About App' >
          <h4> Check out the best conditions in Santa Cruz </h4>
          <h4> Chat with fellow surfers for tips, updates, and meet new friends </h4>
          <h4> Seas the day </h4> 
        </div>
      )
  }
    return (
      <BeachList />
    )
  }
}

export default BodyContainer;
