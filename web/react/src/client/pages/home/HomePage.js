import React, { Component } from 'react';
import './HomePage.scss';

class Home extends Component {
  render() {
    return (
    	<div className = "class"> 
    		<h3> Home page </h3>
  			<p> Built in ssr React and Redux </p>
  		</div>
	  )
  }
};

export default {
  component: Home
};
