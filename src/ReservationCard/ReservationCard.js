import React from 'react'

const ReservationCard = ({id, name, date, time, number}) => {

  return (
    <div className="reservation-card">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <p>{time}</p>
      <p>{number}</p>
    </div>
  )

}

export default ReservationCard