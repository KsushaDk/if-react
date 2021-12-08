import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './TopSection.styles'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

//actions
import { setDateFromInfo, setDateToInfo } from '../../redux/actions/formActions'

function InputDate() {
  const classes = useStyles()

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
    <div className={classes.form__div_date}>
      <label className={classes.form__label}>Check-in-Check-out </label>
      <DatePicker
        className={classes.form__input_date}
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
