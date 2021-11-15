import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions'

function Navigation({ dispatchLogOutUser }) {
  const [showSignOut, setSignOut] = useState(false)

  const handleClick = useCallback((event) => {
    event.preventDefault()
    dispatchLogOutUser(false)
    setSignOut((showSignOut) => !showSignOut)
  }, [])

  return (
    <nav className="top-section__navigation">
      <div className="navigation-logo" />
      <div className="navigation_group">
        <div className="navigation_div-text">Stays</div>
        <div className="navigation_div-text">Attractions</div>
        <div className="navigation_div-picture-night" />

        <div
          className="navigation_div-picture-user"
          onClick={() => {
            setSignOut((showSignOut) => !showSignOut)
          }}
        />
      </div>

      {showSignOut && (
        <div className="navigation_dropdowm-sign-out">
          <div className="navigation_dropdowm-sign-out-icon"></div>
          <Link to="/">
            <div
              className="navigation_dropdowm-sign-out-btn"
              onClick={handleClick}
            >
              Sign Out
            </div>
          </Link>
        </div>
      )}
    </nav>
  )
}

const mapDispatchToProps = {
  dispatchLogOutUser: logoutUser,
}

Navigation.propTypes = {
  dispatchLogOutUser: PropTypes.func,
}

Navigation.displayName = 'Navigation'

export default connect(null, mapDispatchToProps)(Navigation)
