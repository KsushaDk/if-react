import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function InputDate({ dates, setDates }) {
  const [startDate, setStartDate] = useState(dates.startDate)
  const [endDate, setEndDate] = useState(dates.endDate)

  const handleDateChange = (currentDates) => {
    const [start, end] = currentDates
    setStartDate(start)
    setEndDate(end)
  }

  useEffect(() => {
    setDates({ ...dates, startDate: startDate })
  }, [startDate])

  useEffect(() => {
    setDates({ ...dates, endDate: endDate })
  }, [endDate])

  return (
    <div className="form__div-date">
      <label className="form__label">Check-in-Check-out </label>
      <DatePicker
        className="form__input"
        placeholderText="Check-in — Check-out"
        minDate={new Date()}
        onChange={handleDateChange}
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

InputDate.displayName = 'InputDate'

export default InputDate
