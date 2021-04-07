import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super()
    this.state = {
      guestName: '',
      date: '',
      time: '',
      numberOfGuests: ''
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
          onChange={event => this.handleChange(event)}
        />

        <input 
          type="date"
          name='date'
          value={this.state.date}
          onChange={event => this.handleDateChange(event)}
        />

        <select value={this.state.date} onChange={event => this.handleTimeChange(event)}>
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
          onChange={event => this.handleChange(event)}
        />

        <button>Make Reservation</button>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleDateChange = (event) => {
    this.setState({date: this.formatDate(event.target.value)})
  }

  handleTimeChange = (event) => {
    this.setState({time: event.target.value.substring(0, 4)})
  }

  formatDate(date) {
    let month = parseInt(date.split('-')[1])
    let day = parseInt(date.split('-')[2])
    return `${month}/${day}`
  }

}

export default Form