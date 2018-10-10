import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

class Home extends Component{
  render(){
    return(
      <Router>
      <App/>
    </Router>
    )
  }
}

ReactDOM.render( <Router />, document.getElementById('router') );
