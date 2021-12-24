import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './TopSection.styles'
import PropTypes from 'prop-types'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

//actions
import { setDateFromInfo, setDateToInfo } from '../../redux/actions'

function InputDate({ onClick }) {
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
    if (dateFrom !== null) {
      dispatch(setDateFromInfo(Date.parse(dateFrom)))
    }
  }, [dispatch, dateFrom])

  useEffect(() => {
    if (dateTo !== null) {
      dispatch(setDateToInfo(Date.parse(dateTo)))
    }
  }, [dispatch, dateTo])

  return (
    <div className={classes.form__div_date} onClick={onClick}>
      <label className={classes.form__label}>Check-in-Check-out </label>
      <DatePicker
        className={classes.form__input_date}
        placeholderText="Tue 15 Sept — Sat 19 Sept"
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

InputDate.propTypes = {
  onClick: PropTypes.func,
}

InputDate.displayName = 'InputDate'

export default InputDate
