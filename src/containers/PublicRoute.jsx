import React, { useContext } from 'react'
import { array, element, node, oneOfType } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../contexts/user-context.jsx'

function PublicRoute({ children, ...props }) {
  const { isAuthenticated } = useContext(UserContext)

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
  children: oneOfType([node, element, array]),
}

PublicRoute.displayName = 'PublicRoute'

export default PublicRoute
