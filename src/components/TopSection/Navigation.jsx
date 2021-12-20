import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './TopSection.styles'

//actions
import { logoutUser, setTheme } from '../../redux/actions'

function Navigation() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [signOut, setSignOut] = useState(false)
  const theme = useSelector(({ theme }) => theme.theme)

  const handleClick = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(logoutUser(false))
      setSignOut((signOut) => !signOut)
    },
    [dispatch],
  )

  const handleThemeClick = useCallback(
    (event) => {
      event.preventDefault()
      theme === 'light'
        ? dispatch(setTheme('dark'))
        : dispatch(setTheme('light'))
    },
    [dispatch, theme],
  )

  return (
    <nav className={classes.top_section__navigation}>
      <div className={classes.navigation_logo} />
      <div className={classes.navigation_group}>
        <div className={classes.navigation_div_text}>
          <a href="#">Stays</a>
        </div>
        <div className={classes.navigation_div_text}>
          <a href="#">Attractions</a>
        </div>
        <div
          className={classes.navigation_div_picture_night}
          onClick={handleThemeClick}
        />

        <div
          className={classes.navigation_div_picture_user}
          onClick={() => {
            setSignOut((signOut) => !signOut)
          }}
        />
        <div className={classes.navigation_div_picture_menu} />
      </div>

      {signOut && (
        <div className={classes.navigation_dropdowm_sign_out}>
          <div className={classes.navigation_dropdowm_sign_out_icon}></div>
          <Link to="/">
            <div
              className={classes.navigation_dropdowm_sign_out_btn}
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
