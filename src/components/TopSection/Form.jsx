import React, { useState } from 'react'
import PropTypes from 'prop-types'

import InputDestination from './InputDestination.jsx'

function Form({ data, setHotelData }) {
  const [newData, setNewData] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    setHotelData(newData)
  }

  return (
    <>
      <form className="top-section__form" onSubmit={handleSubmit}>
        <InputDestination setNewData={setNewData} />

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
  data: PropTypes.arrayOf(PropTypes.object),
}

export default Form
