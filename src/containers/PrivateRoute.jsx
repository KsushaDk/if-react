import React from 'react'
import { PropTypes } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

//components
import TopSection from '../components/TopSection/TopSection.jsx'
import Footer from '../components/Footer/Footer.jsx'

function PrivateRoute({ children, isAuthenticated, ...props }) {
  if (!isAuthenticated) {
    return <Redirect to="/signin" />
  }

  return (
    <>
      <TopSection
        hotelData={props.hotelData}
        setHotelData={props.setHotelData}
      />
      <Route {...props}>
        <>{children}</>
      </Route>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  }
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
  isAuthenticated: PropTypes.bool,
  setHotelData: PropTypes.func,
  hotelData: PropTypes.string,
}

PrivateRoute.displayName = 'PrivateRoute'

export default connect(mapStateToProps, null)(PrivateRoute)
