import React from 'react'
import PropTypes from 'prop-types'

import './TopSection.css'

import Navigation from './Navigation.jsx'
import Form from './Form.jsx'
import Store from './Store.jsx'

function TopSection({ data, setHotelData }) {
  return (
    <div className="top-section">
      <Navigation />
      <h2 className="top-section__title">
        Discover stays
        <br />
        to live, work or just relax
      </h2>
      <Form data={data} setHotelData={setHotelData} />
      <Store />
    </div>
  )
}

TopSection.propTypes = {
  setHotelData: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
}

export default TopSection
