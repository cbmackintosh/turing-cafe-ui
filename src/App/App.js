import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../API-Calls'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }

  componentDidMount() {
    fetchReservations()
    .then(data => this.setState({ reservations: data }))
  }
}

export default App;
