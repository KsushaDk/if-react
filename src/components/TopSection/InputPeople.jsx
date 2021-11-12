import React from 'react'
import PropTypes from 'prop-types'

function InputPeople({ value, onClick }) {
  return (
    <div className="form__div-people" onClick={onClick}>
      <input
        className="form__input form__input-people"
        type="text"
        placeholder={`${value.adults}` + ' ' + 'Adults'}
      />
      <input
        className="form__input form__input-people"
        type="text"
        placeholder={`${value.children}` + ' ' + 'Children'}
      />
      <input
        className="form__input form__input-people-last"
        type="text"
        placeholder={`${value.rooms}` + ' ' + 'Room'}
      />
    </div>
  )
}

InputPeople.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
}

InputPeople.displayName = 'InputPeople'

export default InputPeople
