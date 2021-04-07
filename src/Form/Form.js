import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  render() {
    return (
      <form className='resy-form'>
        <input
          type="text"
          placeholder="Name"
          name='guestName'
          value={this.state.guestName}
          onChange={event => this.handleNameChange(event)}
        />

        <input 
          type="date"
          name='date'
          onChange={event => this.handleDateChange(event)}
        />

        <select onChange={event => this.handleTimeChange(event)}>
          <option>12:00 pm</option>
          <option>12:30 pm</option>
          <option>1:00 pm</option>
          <option>1:30 pm</option>
          <option>2:00 pm</option>
          <option>2:30 pm</option>
          <option>3:00 pm</option>
          <option>3:30 pm</option>
          <option>4:00 pm</option>
          <option>4:30 pm</option>
          <option>5:00 pm</option>
          <option>5:30 pm</option>
          <option>6:00 pm</option>
          <option>6:30 pm</option>
          <option>7:00 pm</option>
          <option>7:30 pm</option>
          <option>8:00 pm</option>
        </select>

        <input 
          type="number"
          min="1"
          max="12"
          name="numberOfGuests"
          value={this.state.numberOfGuests}
          onChange={event => this.handleNumberChange(event)}
        />

        <button onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleNumberChange = (event) => {
    this.setState({number: parseInt(event.target.value)})
  }

  handleDateChange = (event) => {
    this.setState({date: this.formatDate(event.target.value)})
  }

  handleTimeChange = (event) => {
    this.setState({time: event.target.value.substring(0, 4)})
  }

  formatDate = (date) => {
    let month = parseInt(date.split('-')[1])
    let day = parseInt(date.split('-')[2])
    return `${month}/${day}`
  }

  submitReservation = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.makeReservation(newReservation)
  }

}

export default Form