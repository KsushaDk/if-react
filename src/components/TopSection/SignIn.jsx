import React, { useContext, useState, useCallback } from 'react'
import { UserContext } from '../../contexts/user-context.jsx'

//component
import Navigation from './Navigation.jsx'

function SignIn() {
  const [state, setState] = useState({ email: '', password: '' })
  const { signIn } = useContext(UserContext)

  const handleChange = useCallback(
    (key) => (event) => {
      event.preventDefault()
      setState((prevState) => ({ ...prevState, [key]: event.target.value }))
    },
    [],
  )

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    signIn(state)
  }, [])

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
              onChange={handleChange('email')}
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
              onChange={handleChange('password')}
            />
          </div>
          <div>
            <input
              className="form-sign-in__input-btn"
              type="submit"
              value="Sign in"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

SignIn.displayName = 'SignIn'

export default SignIn
