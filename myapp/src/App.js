import React, { Component } from 'react';
import './App.css';
import store from './store.js'
import Homepage from './components/Homepage.js'

const views = {
  Home: Homepage
}

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentDidMount(){
    // fetch ?
  }

  render() {
    return (
      <div className="App">
        {views[this.state.router.pageActive](this.state)}
      </div>
    );
  }
}

export default App;
