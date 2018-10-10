import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Guilty'
import DogForm from './components/Happy'
import About from './components/Sleepy'
import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Nav />
            <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/Guilty" component={Guilty} />
            <Route path="/Happy" component={Happy} />
            <Route path="/Sleepy" component={Sleepy} />
            </Switch>
             <Footer/>
           </div>
         </div>
    )
  }
}
