import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

//containers
import PrivateRoute from '../containers/PrivateRoute.jsx'

//components
import AvailableHotel from '../components/Hotels/AvailableHotel.jsx'
import HotelItems from '../components/Hotels/HotelItems.jsx'
import AvailableHotels from '../components/Hotels/AvailableHotels.jsx'

function HotelRoutes() {
  const availableHotels = useSelector(({ hotels }) => hotels.available || [])

  return (
    <Switch>
      <PrivateRoute exact path="/">
        {!!availableHotels.length && (
          <AvailableHotels
            hotels={availableHotels}
            title={'Available hotels'}
          />
        )}

        <HotelItems title={'Homes guests loves'} />
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

export default HotelRoutes
