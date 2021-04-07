import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({id, name, date, time, number, cancelReservation}) => {

  return (
    <div className="reservation-card">
      <h2 className="reservation-name">{name}</h2>
      <h3 className="reservation-date">{date}</h3>
      <p className="reservation-time">{time} pm</p>
      <p className="reservation-number">Number of Guests: {number}</p>
      <button onClick={() => cancelReservation(id)}>CANCEL</button>
    </div>
  )

}

export default ReservationCard