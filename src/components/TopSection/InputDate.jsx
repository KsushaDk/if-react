import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function InputsDate() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <div className="form__div-date">
      <label className="form__label">Check-in-Check-out </label>
      <DatePicker
        className="form__input"
        placeholderText="Check-in — Check-out"
        minDate={new Date()}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
      />
    </div>
  )
}

export default InputsDate
