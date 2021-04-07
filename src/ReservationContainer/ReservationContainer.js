import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'
import './ReservationContainer.css'

const ReservationContainer = ({ reservations, cancelReservation }) => {

  const reservationCards = reservations.map(reservation => {
    return (
      <ReservationCard 
        key={reservation.id} 
        id={reservation.id} 
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        cancelReservation={cancelReservation}
      />
    )
  })

  return (
    <div className='reservation-container'>
      {reservationCards}
    </div>
  )

}

export default ReservationContainer