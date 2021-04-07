import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../API-Calls'
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
        <Form />
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
