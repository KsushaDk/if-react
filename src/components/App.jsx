import React, { useEffect } from 'react'
import { Switch } from 'react-router'
import { useDispatch } from 'react-redux'

//actions
import { getPopularHotels } from '../redux/actions'

//styles
import '../index.css'

//containers
import PublicRoute from '../containers/PublicRoute.jsx'

//routes
import HotelRoutes from '../routes/HotelRoutes.jsx'
import SignIn from './TopSection/SignIn.jsx'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularHotels())
  }, [dispatch])

  return (
    <>
      <Switch>
        <PublicRoute exact path="/signin">
          <SignIn />
        </PublicRoute>

        <HotelRoutes />
      </Switch>
    </>
  )
}

export default App
