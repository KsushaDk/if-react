import React from 'react'
import PropTypes from 'prop-types'

import './TopSection.css'

import Navigation from './Navigation.jsx'
import Form from './Form.jsx'
import Store from './Store.jsx'

function TopSection({
  hotelData,
  setHotelData,
  datesData,
  setDatesData,
  peopleData,
  setPeopleData,
}) {
  return (
    <div className="top-section">
      <Navigation />
      <h2 className="top-section__title">
        Discover stays
        <br />
        to live, work or just relax
      </h2>
      <Form
        hotelData={hotelData}
        setHotelData={setHotelData}
        datesData={datesData}
        setDatesData={setDatesData}
        peopleData={peopleData}
        setPeopleData={setPeopleData}
      />
      <Store />
    </div>
  )
}

TopSection.propTypes = {
  setHotelData: PropTypes.func,
  hotelData: PropTypes.string,
  setDatesData: PropTypes.func,
  datesData: PropTypes.object,
  setPeopleData: PropTypes.func,
  peopleData: PropTypes.object,
}

export default TopSection
