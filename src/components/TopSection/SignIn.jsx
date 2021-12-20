import React, { useState, useCallback } from 'react'
import useStyles from './TopSection.styles'
import { useDispatch, useSelector } from 'react-redux'

//actions
import { loginUser, addUser } from '../../redux/actions'

//component
import Navigation from './Navigation.jsx'

function SignIn() {
  const dispatch = useDispatch()
  const classes = useStyles()

  const [state, setState] = useState({ email: '', password: '' })
  const user = useSelector(({ user }) => {
    return user
  })
  const [warning, setWarning] = useState(false)

  const handleChange = useCallback((event) => {
    event.preventDefault()
    setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }))
  }, [])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      if (user.email === state.email) {
        if (user.password === state.password) {
          dispatch(addUser(state))
          dispatch(loginUser(true))
        } else {
          setWarning(true)
          setState({ ...state, password: '' })
        }
      } else {
        dispatch(addUser(state))
        dispatch(loginUser(true))
      }
    },
    [state, dispatch, user],
  )

  return (
    <div className={classes.wrapper__sign_in}>
      <Navigation />
      <div className={classes.top_section__sign_in}>
        <h2 className={classes.top_section__form_sign_in_title}> Sign in</h2>
        <form
          className={classes.top_section__form_sign_in}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button className={classes.form_sign_in__btn} type="submit">
              Sign in
            </button>
          </div>
          {warning && (
            <div className={classes.form_sign_in__warning}>
              Password is incorrect. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

SignIn.displayName = 'SignIn'

export default SignIn
