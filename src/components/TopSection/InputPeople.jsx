import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import useStyles from './TopSection.styles'

function InputPeople({ onClick }) {
  const classes = useStyles()

  const people = useSelector(({ form }) => form)
  return (
    <div className={classes.form__div_people} onClick={onClick}>
      <input
        className={classes.form__input_people}
        type="text"
        placeholder={`${people.adults}` + ' ' + 'Adults'}
      />
      <input
        className={classes.form__input_people}
        type="text"
        placeholder={`${people.children}` + ' ' + 'Children'}
      />
      <input
        className={classes.form__input_people_last}
        type="text"
        placeholder={`${people.rooms}` + ' ' + 'Room'}
      />
    </div>
  )
}

InputPeople.propTypes = {
  onClick: PropTypes.func,
}

InputPeople.displayName = 'InputPeople'

export default InputPeople
