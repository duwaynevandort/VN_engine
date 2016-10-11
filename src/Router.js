import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './App';

class NoMatch extends Component {
  render() {
    return (
      <div> 
      	No Match
      </div>
    );
  }
}

const Routes = (props) => (
	<Router history={hashHistory}>
    	<Route path="/" component={App} />	
    	<Route path="*" component={NoMatch} />
  	</Router>
);

export default Routes;