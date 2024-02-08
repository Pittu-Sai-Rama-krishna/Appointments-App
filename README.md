## Appointments App

![Appointments App Output](https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif)

### Introduction
This is an Appointments App where users can add appointments with titles and dates. Users can also star appointments to mark them as important and filter appointments based on their starred status.

### Features
- Add appointments with titles and dates
- Star appointments to mark them as important
- Filter appointments based on their starred status

### Technologies Used
- React.js
- HTML5
- CSS3

### Set Up Instructions
1. Clone the repository from [GitHub](https://github.com/yourusername/appointments-app).
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

### Components Structure
![Components Structure](https://assets.ccbp.in/frontend/content/react-js/appointments-app-component-breakdown-structure.png)

### Implementation Files
- `src/components/Appointments/index.js`
- `src/components/Appointments/index.css`
- `src/components/AppointmentItem/index.js`
- `src/components/AppointmentItem/index.css`

### Quick Tips
- Use the HTML input element with the type `date` for date selection.
- Utilize the `format` function from the date-fns package to format dates.
- Ensure the star button in each appointment has the data-testid attribute as **star**.

### Design Files
- [Extra Small and Small](https://assets.ccbp.in/frontend/content/react-js/appointments-app-sm-output-v2.png)
- [Medium, Large, and Extra Large](https://assets.ccbp.in/frontend/content/react-js/appointments-app-lg-output.png)

### Resources
- [Appointments Image](https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png) (alt should be **appointments**)
- [Star Icon](https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png)
- [Filled Star Icon](https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png)

### Colors
- Hex: #9796f0 (Background)
- Hex: #fbc7d4 (Accent)
- Hex: #ffffff (White)
- Hex: #171f46 (Dark Blue)
- Hex: #8b5cf6 (Light Purple)
- Hex: #b5b7c4 (Gray)
- Hex: #9897f0 (Light Blue)

### Font-families
- Roboto

### Completion Instructions
1. Initially, the list of appointments should be empty, and the title input and date input should be empty.
2. When non-empty values are provided for the title and date and the **Add** button is clicked:
   - A new appointment should be added to the list of appointments.
   - The value inside the input elements for the title and date should be updated to their initial values.
3. When the **Star** on an appointment is clicked, the appointment should be starred.
4. The status of the **Starred** filter should be updated by clicking on it.
5. When the **Starred** filter is active, all the starred appointments should be filtered and displayed.
6. When the **Starred** filter is inactive, the list of all appointments should be displayed.
