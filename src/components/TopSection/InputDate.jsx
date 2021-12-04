import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

//actions
import { setDateFromInfo, setDateToInfo } from '../../redux/actions/formActions'

function InputDate() {
  const dispatch = useDispatch()
  const dates = useSelector(({ form }) => form)

  const [dateFrom, setDateFrom] = useState(dates.dateFrom)
  const [dateTo, setDateTo] = useState(dates.dateTo)

  const handleDateChange = useCallback((currentDates) => {
    const [start, end] = currentDates
    setDateFrom(start)
    setDateTo(end)
  }, [])

  useEffect(() => {
    dispatch(setDateFromInfo(Date.parse(dateFrom)))
  }, [dispatch, dateFrom])

  useEffect(() => {
    dispatch(setDateToInfo(Date.parse(dateTo)))
  }, [dispatch, dateTo])

  return (
    <div className="form__div-date">
      <label className="form__label">Check-in-Check-out </label>
      <DatePicker
        className="form__input"
        placeholderText="Check-in — Check-out"
        minDate={new Date()}
        onChange={handleDateChange}
        startDate={dateFrom}
        endDate={dateTo}
        selectsRange
        monthsShown={2}
      />
    </div>
  )
}

InputDate.displayName = 'InputDate'

export default InputDate
