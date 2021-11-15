import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { loginUser, addUser } from '../../redux/actions'

//component
import Navigation from './Navigation.jsx'

function SignIn({ dispatchAddUser, dispatchLogInUser }) {
  const [state, setState] = useState({ email: '', password: '' })

  const handleChange = useCallback((event) => {
    event.persist()
    setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }))
  }, [])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    dispatchLogInUser(true)
    // dispatchAddUser(state)
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
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  dispatchLogInUser: loginUser,
  dispatchAddUser: addUser,
}

SignIn.propTypes = {
  dispatchAddUser: PropTypes.func,
  dispatchLogInUser: PropTypes.func,
}

SignIn.displayName = 'SignIn'

export default connect(null, mapDispatchToProps)(SignIn)
