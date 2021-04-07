import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({name, date, time, number}) => {

  return (
    <div className="reservation-card">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button>CANCEL</button>
    </div>
  )

}

export default ReservationCard