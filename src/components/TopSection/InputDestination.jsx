import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import dataHotels from '../../constants/dataHotels'

function InputDestination({ setHotelData }) {
  const onInputChange = (e) => {
    setHotelData(
      _.filter(
        dataHotels,
        (item) =>
          item.name === `${e.target.value}` ||
          item.city === `${e.target.value}` ||
          item.country === `${e.target.value}`,
      ),
    )
  }

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
        onChange={onInputChange}
      />
    </div>
  )
}

InputDestination.propTypes = {
  setHotelData: PropTypes.func,
}

export default InputDestination
