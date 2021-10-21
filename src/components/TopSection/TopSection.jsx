import React from 'react'
import PropTypes from 'prop-types'

import './TopSection.css'

import Navigation from './Navigation.jsx'
import Form from './Form.jsx'
import Store from './Store.jsx'

function TopSection(props) {
  return (
    <div className="top-section">
      <Navigation />
      <h2 className="top-section__title">
        Discover stays
        <br />
        to live, work or just relax
      </h2>
      <Form setHotelData={props.setHotels} />
      <Store />
    </div>
  )
}

TopSection.propTypes = {
  setHotels: PropTypes.func,
}

export default TopSection
