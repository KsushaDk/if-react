import React from 'react'
import PropTypes from 'prop-types'

function InputDestination({ onHotelChange }) {
  return (
    <div className="form__div-destination">
      <label htmlFor="search" className="form__label">
        Your destination or hotel name
      </label>
      <input
        className="form__input form__input-destination"
        id="search"
        type="text"
        name="search"
        placeholder="New York"
        onChange={(event) => onHotelChange(event.target.value)}
      />
    </div>
  )
}

InputDestination.propTypes = {
  onHotelChange: PropTypes.func,
}

export default InputDestination
