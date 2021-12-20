import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

//containers
import PrivateRoute from '../containers/PrivateRoute.jsx'

//components
import AvailableHotel from '../components/Hotels/AvailableHotel.jsx'
import HotelItems from '../components/Hotels/HotelItems.jsx'
import AvailableHotels from '../components/Hotels/AvailableHotels.jsx'
import Offers from '../components/Offers/Offers.jsx'
import Destinations from '../components/Destinations/Destinations.jsx'
import SignUp from '../components/SignUp/SignUp.jsx'
import Reviews from '../components/Reviews/Reviews.jsx'

function MainContentRoutes() {
  const availableHotels = useSelector(({ hotels }) => hotels.available || [])

  return (
    <Switch>
      <PrivateRoute exact path="/">
        <Offers />
        {!!availableHotels.length && (
          <AvailableHotels
            hotels={availableHotels}
            title={'Available hotels'}
          />
        )}

        <HotelItems title={'Homes guests loves'} />

        <Destinations />
        <SignUp />
        <Reviews />
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

export default MainContentRoutes
