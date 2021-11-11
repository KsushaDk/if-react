import React from 'react'

// import logo from '../../../public/images/logo.svg'

function Navigation() {
  return (
    <nav className="top-section__navigation">
      <div className="navigation-logo" />
      <div className="navigation_group">
        <div className="navigation_div-text">Stays</div>
        <div className="navigation_div-text">Attractions</div>
        <div className="navigation_div-picture-night" />
        <div className="navigation_div-picture-user" />
      </div>
    </nav>
  )
}

export default Navigation
