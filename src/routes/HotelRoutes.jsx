import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect } from 'react-router-dom'

//containers
import PrivateRoute from '../containers/PrivateRoute.jsx'

//components
import AvailableHotel from '../components/Hotels/AvailableHotel.jsx'
import HotelItems from '../components/Hotels/HotelItems.jsx'
import AvailableHotels from '../components/Hotels/AvailableHotels.jsx'

function HotelRoutes({
  defaultHotels,
  availableHotels,
  hotelData,
  setHotelData,
}) {
  return (
    <Switch>
      <PrivateRoute
        exact
        path="/"
        hotelData={hotelData}
        setHotelData={setHotelData}
      >
        {!!availableHotels.length && (
          <AvailableHotels
            hotels={availableHotels}
            title={'Available hotels'}
          />
        )}

        <HotelItems hotels={defaultHotels} title={'Homes guests loves'} />
      </PrivateRoute>

      <PrivateRoute exact path="/hotels/:id">
        <AvailableHotel />
      </PrivateRoute>

      <PrivateRoute path="/hotels">
        <Redirect strict from="hotels" to="/" />
      </PrivateRoute>
    </Switch>
  )
}

HotelRoutes.propTypes = {
  defaultHotels: PropTypes.arrayOf(PropTypes.object),
  availableHotels: PropTypes.arrayOf(PropTypes.object),
  setHotelData: PropTypes.func,
  hotelData: PropTypes.string,
}

export default HotelRoutes
