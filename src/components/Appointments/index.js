// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], inputText: '', inputDate: '', isStarred: false}

  onSubmit = event => {
    event.preventDefault()
    const {inputDate, inputText} = this.state
    const formatedDate = format(new Date(inputDate), 'dd MMMM yyyy, EEEE')
    const newAppointment = {
      id: uuidv4(),
      title: inputText,
      date: formatedDate,
      starred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      inputDate: '',
      inputText: '',
    }))
  }

  onInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onInputDate = event => {
    this.setState({inputDate: event.target.value})
  }

  onStarred = () => {
    const {isStarred} = this.state
    if (isStarred) {
      this.setState({isStarred: false})
    } else {
      this.setState({isStarred: true})
    }
  }

  starAppointment = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachItem =>
        eachItem.id === id
          ? {...eachItem, starred: !eachItem.starred}
          : eachItem,
      ),
    }))
  }

  render() {
    const {appointmentsList, inputText, inputDate, isStarred} = this.state
    const filteredAppointmentsList = isStarred
      ? appointmentsList.filter(eachItem => eachItem.starred === true)
      : appointmentsList
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="card-sub-container">
            <form className="form-container" onSubmit={this.onSubmit}>
              <label htmlFor="inputText" className="input-label">
                TITLE
              </label>
              <input
                type="text"
                className="input-text"
                id="inputText"
                onChange={this.onInputText}
                value={inputText}
                placeholder="Title"
              />

              <label htmlFor="inpuDate" className="input-label">
                DATE
              </label>
              <input
                type="date"
                className="input-date"
                id="inputDate"
                onChange={this.onInputDate}
                value={inputDate}
                placeholder="Date"
              />
              <button type="submit" className="submit-button">
                Add
              </button>
            </form>
            <img
              className="image"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <hr className="hr-line" />
          <div className="appointments-container">
            <div className="appointments-text-container">
              <h1 className="appointments-heading">Appointments</h1>
              <button
                className="appointments-button"
                type="button"
                onClick={this.onStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointment-items-container">
              {filteredAppointmentsList.map(eachItem => (
                <AppointmentItem
                  key={eachItem.id}
                  AppointmentItemDetails={eachItem}
                  starAppointment={this.starAppointment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
