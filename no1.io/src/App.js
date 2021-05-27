import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './page/Home'
import ViewAllDmoain from './page/ViewAllDomain';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/all-io-domains/" component={ViewAllDmoain} />
      </BrowserRouter>
    )
  }
}

export default App
