import React, { useState } from 'react'
import PropTypes from 'prop-types'

import InputDestination from './InputDestination.jsx'
import InputsDate from './InputDate.jsx'
import InputPeople from './InputPeople.jsx'

function Form({ hotelData, setHotelData }) {
  const [destination, setDestination] = useState(hotelData)

  const handleSubmit = (e) => {
    e.preventDefault()
    setHotelData(destination)
  }

  return (
    <>
      <form className="top-section__form" onSubmit={handleSubmit}>
        <InputDestination
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <InputsDate />
        <InputPeople />
        <div className="form__div-btn">
          <input
            className="form__input form__input-btn"
            type="submit"
            value="Search"
          />
        </div>
      </form>
    </>
  )
}

Form.propTypes = {
  setHotelData: PropTypes.func,
  hotelData: PropTypes.string,
}

export default Form
