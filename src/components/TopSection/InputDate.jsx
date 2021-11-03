import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function InputDate({ dates, setDates }) {
  const [startDate, setStartDate] = useState(dates.startDate)
  const [endDate, setEndDate] = useState(dates.endDate)

  return (
    <div className="form__div-date">
      <label className="form__label">Check-in-Check-out </label>
      <DatePicker
        className="form__input"
        placeholderText="Check-in — Check-out"
        minDate={new Date()}
        onChange={(currentDates) => {
          const [start, end] = currentDates
          setStartDate(start)
          setEndDate(end)
          setDates({ ...dates, startDate: startDate })
          setDates({ ...dates, endDate: endDate })
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
      />
    </div>
  )
}
InputDate.propTypes = {
  setDates: PropTypes.func,
  dates: PropTypes.object,
}

export default InputDate

// function InputDate({ date, setDate }) {
//   const [startDate, setStartDate] = useState(date.startDate)
//   const [endDate, setEndDate] = useState(date.endDate)

//   const onDateChange = (dates) => {
//     const [start, end] = dates
//     setStartDate(start)
//     setEndDate(end)
//   }

//   return (
//     <div className="form__div-date">
//       <label className="form__label">Check-in-Check-out </label>
//       <DatePicker
//         className="form__input"
//         placeholderText="Check-in — Check-out"
//         minDate={new Date()}
//         onChange={onDateChange}
//         startDate={startDate}
//         endDate={endDate}
//         selectsRange
//         monthsShown={2}
//       />
//     </div>
//   )
// }
// InputDate.propTypes = {
//   setDate: PropTypes.func,
//   date: PropTypes.object,
// }

// export default InputDate
