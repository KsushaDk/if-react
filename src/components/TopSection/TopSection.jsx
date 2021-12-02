import React from 'react'

import './TopSection.css'

//components
import Navigation from './Navigation.jsx'
import Form from './Form.jsx'
import Stores from './Stores.jsx'

function TopSection() {
  return (
    <div className="top-section">
      <Navigation />
      <h2 className="top-section__title">
        Discover stays
        <br />
        to live, work or just relax
      </h2>
      <Form />
      <Stores />
    </div>
  )
}

TopSection.displayName = 'TopSection'

export default TopSection
