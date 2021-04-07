
export const fetchReservations = () => {
  fetch(`http://localhost:3001/api/v1/reservations`)
  .then(response => response.json())
  .then(data => console.log(data))
}