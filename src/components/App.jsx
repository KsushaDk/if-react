import React, { useEffect } from 'react'
import { Switch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'react-jss'

//actions
import { getPopularHotels } from '../redux/actions'

//styles
import '../index.css'
import { lightTheme, darkTheme } from '../theme'

//containers
import PublicRoute from '../containers/PublicRoute.jsx'

//routes
import MainContentRoutes from '../routes/MainContentRoutes.jsx'
import SignIn from './TopSection/SignIn.jsx'

function App() {
  const dispatch = useDispatch()
  const theme = useSelector(({ theme }) => theme.theme)

  useEffect(() => {
    dispatch(getPopularHotels())
  }, [dispatch])

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Switch>
          <PublicRoute exact path="/signin">
            <SignIn />
          </PublicRoute>
          <MainContentRoutes />
        </Switch>
      </ThemeProvider>
    </>
  )
}

export default App
