import React, { useState, useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { loginUser, addUser } from '../../redux/actions'

//component
import Navigation from './Navigation.jsx'

function SignIn() {
  const [state, setState] = useState({ email: '', password: '' })
  const user = useSelector((state) => {
    return state
  })
  const [warning, setWarning] = useState(false)
  const dispatch = useDispatch()

  const handleChange = useCallback((event) => {
    event.persist()
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
    <div className="wrapper__sign-in">
      <Navigation />
      <div className="top-section__sign-in">
        <h2 className="top-section__form-sign-in_title"> Sign in</h2>
        <form className="top-section__form-sign-in" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form-sign-in__label">
              Email address
            </label>
            <input
              className="form-sign-in__input"
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="form-sign-in__label">
              Password
            </label>
            <input
              className="form-sign-in__input"
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="form-sign-in__input-btn"
              type="submit"
              value="Sign in"
            />
          </div>
          {warning && (
            <div className="form-sign-in__warning">
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
