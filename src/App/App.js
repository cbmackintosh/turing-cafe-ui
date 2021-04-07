import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../API-Calls'
import ReservationContainer from '../ReservationContainer/ReservationContainer'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <ReservationContainer reservations={this.state.reservations} />
      </div>
    )
  }

  componentDidMount() {
    fetchReservations()
    .then(data => this.setState({ reservations: data }))
  }
}

export default App;
