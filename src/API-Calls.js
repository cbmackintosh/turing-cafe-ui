
export const fetchReservations = () => {
  return fetch(`http://localhost:3001/api/v1/reservations`)
  .then(response => response.json())
}

export const postNewReservation = (newReservation) => {
  return fetch(`http://localhost:3001/api/v1/reservations`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newReservation)
  })
  .then(response => response.json())
}

export const deleteReservation = (id) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then(response => response.json())
}