import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'

const ReservationContainer = ({ reservations }) => {

  const reservationCards = reservations.map(reservation => {
    return (
      <ReservationCard 
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })

  return (
    <div className='resy-container'>
      {reservationCards}
    </div>
  )

}

export default ReservationContainer