import React, { useContext } from 'react'
import { PropTypes, array, element, node, oneOfType } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../contexts/user-context.jsx'

//components
import TopSection from '../components/TopSection/TopSection.jsx'
import Footer from '../components/Footer/Footer.jsx'

function PrivateRoute({ children, ...props }) {
  const { isAuthenticated } = useContext(UserContext)

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

PrivateRoute.propTypes = {
  children: oneOfType([node, element, array]),
  setHotelData: PropTypes.func,
  hotelData: PropTypes.string,
}

PrivateRoute.displayName = 'PrivateRoute'

export default PrivateRoute
