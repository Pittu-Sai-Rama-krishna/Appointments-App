// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {AppointmentItemDetails, starAppointment} = props
  const {id, title, date, starred} = AppointmentItemDetails
  const imageUrl = starred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li key={id} className="appointment-item-container">
      <div className="appointment-container">
        <p className="appointment-title">{title}</p>
        <p className="appointment-date">{date}</p>
      </div>
      <button
        className="appointment-image-button"
        data-testid="star"
        type="button"
        onClick={() => starAppointment(id)}
      >
        <img className="appointment-image" alt="star" src={imageUrl} />
      </button>
    </li>
  )
}

export default AppointmentItem
