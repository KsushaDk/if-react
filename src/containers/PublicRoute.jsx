import React from 'react'
import { PropTypes } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'

function PublicRoute({ children, ...props }) {
  const isAuthenticated = useSelector((state) => state.isAuthenticated)

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Route {...props}>
      <>{children}</>
    </Route>
  )
}

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
}

PublicRoute.displayName = 'PublicRoute'

export default PublicRoute
