import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({id, name, date, time, number, cancelReservation}) => {

  return (
    <div className="reservation-card">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button onClick={() => cancelReservation(id)}>CANCEL</button>
    </div>
  )

}

export default ReservationCard