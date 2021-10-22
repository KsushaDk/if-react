import React from 'react'
import PropTypes from 'prop-types'

import InputDestination from './InputDestination.jsx'

function Form({ setHotelData }) {
  return (
    <>
      <form className="top-section__form">
        <InputDestination setHotelData={setHotelData} />
        <div className="form__div-date">
          <div className="form__div-date-item">
            <label className="form__label" htmlFor="in">
              Check-in
            </label>
            <input
              className="form__input form__input-date"
              id="in"
              type="date"
            />
          </div>
          <div className="form__div-date-item">
            <label className="form__label" htmlFor="out">
              Check-out
            </label>
            <input
              className="form__input form__input-date"
              id="out"
              type="date"
            />
          </div>
        </div>
        <div className="form__div-people">
          <input
            className="form__input form__input-people"
            type="text"
            placeholder="Adults"
          />
          <input
            className="form__input form__input-people"
            type="text"
            placeholder="Children"
          />
          <input
            className="form__input form__input-people-last"
            type="text"
            placeholder="Room"
          />
        </div>
        <button className="form__button">Search</button>
      </form>
    </>
  )
}

Form.propTypes = {
  setHotelData: PropTypes.func,
}

export default Form
