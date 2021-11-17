import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions'

function Navigation() {
  const [showSignOut, setSignOut] = useState(false)
  const dispatch = useDispatch()

  const handleClick = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(logoutUser(false))
      setSignOut((showSignOut) => !showSignOut)
    },
    [dispatch],
  )

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

Navigation.displayName = 'Navigation'

export default Navigation
