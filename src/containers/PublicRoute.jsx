import React from 'react'
import { PropTypes } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

function PublicRoute({ children, isAuthenticated, ...props }) {
  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Route {...props}>
      <>{children}</>
    </Route>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  }
}

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
  isAuthenticated: PropTypes.bool,
}

PublicRoute.displayName = 'PublicRoute'

export default connect(mapStateToProps, null)(PublicRoute)
