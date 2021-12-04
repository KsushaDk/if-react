import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

function InputPeople({ onClick }) {
  const people = useSelector(({ form }) => form)
  return (
    <div className="form__div-people" onClick={onClick}>
      <input
        className="form__input form__input-people"
        type="text"
        placeholder={`${people.adults}` + ' ' + 'Adults'}
      />
      <input
        className="form__input form__input-people"
        type="text"
        placeholder={`${people.children}` + ' ' + 'Children'}
      />
      <input
        className="form__input form__input-people-last"
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
