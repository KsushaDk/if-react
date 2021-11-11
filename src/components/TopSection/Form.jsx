import React, { useState } from 'react'
import PropTypes from 'prop-types'

import InputDestination from './InputDestination.jsx'
import InputDate from './InputDate.jsx'
import InputPeople from './InputPeople.jsx'
import FilterPeople from './FilterPeople.jsx'

function Form({ hotelData, setHotelData }) {
  const [destination, setDestination] = useState(hotelData)
  const [dates, setDates] = useState({ startDate: null, endDate: null })
  const [people, setPeople] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  })

  const [filter, setFilter] = useState(false)

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
        <InputDate dates={dates} setDates={setDates} />
        <InputPeople
          value={people}
          onClick={() => {
            setFilter((filter) => !filter)
          }}
          onChange={(e) => setPeople(e.target.value)}
        />
        <div className="form__div-btn">
          <input
            className="form__input form__input-btn"
            type="submit"
            value="Search"
          />
        </div>

        {filter && <FilterPeople people={people} setPeople={setPeople} />}
      </form>
    </>
  )
}

Form.propTypes = {
  setHotelData: PropTypes.func,
  hotelData: PropTypes.string,
}

Form.displayName = 'Form'

export default Form
