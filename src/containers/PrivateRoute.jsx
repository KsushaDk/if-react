import React from 'react'
import { PropTypes } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'

//components
import TopSection from '../components/TopSection/TopSection.jsx'
import Footer from '../components/Footer/Footer.jsx'

function PrivateRoute({ children, ...props }) {
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)

  if (!isAuthenticated) {
    return <Redirect to="/signin" />
  }

  return (
    <>
      <TopSection />
      <Route {...props}>
        <>{children}</>
      </Route>
      <Footer />
    </>
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
}

PrivateRoute.displayName = 'PrivateRoute'

export default PrivateRoute
