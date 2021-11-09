import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function InputDestination({ value, onChange }) {
  return (
    <div className="form__div-destination">
      <label htmlFor="search" className="form__label">
        Your destination or hotel name
      </label>
      <Link to="/hotels">
        <input
          className="form__input form__input-destination"
          id="search"
          type="text"
          name="search"
          placeholder="New York"
          value={value}
          onChange={onChange}
        />
      </Link>
    </div>
  )
}

InputDestination.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}
export default InputDestination
