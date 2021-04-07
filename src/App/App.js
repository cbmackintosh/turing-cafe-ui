import React, { Component } from 'react';
import './App.css';
import { fetchReservations, postNewReservation } from '../API-Calls'
import ReservationContainer from '../ReservationContainer/ReservationContainer'
import Form from '../Form/Form'

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
        <Form makeReservation={this.makeReservation} />
        <ReservationContainer reservations={this.state.reservations} />
      </div>
    )
  }

  componentDidMount() {
    fetchReservations()
    .then(data => this.setState({ reservations: data }))
  }

  makeReservation = (newReservation) => {
    postNewReservation(newReservation)
    .then(result => console.log(result))
  }
}

export default App;
