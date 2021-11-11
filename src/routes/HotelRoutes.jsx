import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

//components
import AvailableHotel from '../components/Hotels/AvailableHotel.jsx'
import HotelsItems from '../components/Hotels/HotelsItems.jsx'
import AvailableHotels from '../components/Hotels/AvailableHotels.jsx'

function HotelRoutes({ defaultHotels, availableHotels }) {
  return (
    <Switch>
      <Route exact path="/">
        {!!availableHotels.length && (
          <AvailableHotels
            hotels={availableHotels}
            title={'Available hotels'}
          />
        )}

        <HotelsItems hotels={defaultHotels} title={'Homes guests loves'} />
      </Route>

      <Route exact path="/hotels/:id">
        <AvailableHotel />
      </Route>

      <Route path="/hotels">
        <Redirect strict from="hotels" to="/" />
      </Route>
    </Switch>
  )
}

HotelRoutes.propTypes = {
  defaultHotels: PropTypes.arrayOf(PropTypes.object),
  availableHotels: PropTypes.arrayOf(PropTypes.object),
}

export default HotelRoutes
