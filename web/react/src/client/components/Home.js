import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
    	<div> 
    		I'm the best home component
    		<br />
			<button onClick={() => console.log('Hi there!')}>
				Press me!
			</button>
		</div>
	)
  }
};

export default Home;