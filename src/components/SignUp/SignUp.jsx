import React, { useState } from 'react'
import useStyles from './SignUp.styles'

function SignUp() {
  const classes = useStyles()
  const [isShown, setShown] = useState(true)

  const handleClick = () => {
    setShown(false)
  }

  return (
    isShown && (
      <div className={classes.signup}>
        <img src="/images/cross.svg" alt="close" onClick={handleClick} />
        <div className={classes.signup_item}>
          <a href="#">
            <img src="/images/signup.svg" alt="user" />
          </a>
          <div>
            <p>Sign up and get 20% off your first booking</p>
            <button>
              <a href="#">Sign up</a>
            </button>
          </div>
        </div>
      </div>
    )
  )
}

SignUp.displayName = 'SignUp'

export default SignUp
