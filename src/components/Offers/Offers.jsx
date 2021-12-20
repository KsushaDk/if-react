import React from 'react'
import useStyles from './Offers.styles'

function Offers() {
  const classes = useStyles()

  return (
    <div className={classes.offers}>
      <h2 className={classes.offers__title}>What do we offer</h2>
      <div className={classes.offers__items}>
        <div className={classes.offers__item}>
          <img src="/images/support.png" alt="support" />
          <p>
            <a href="#">Support 24/7</a>
          </p>
        </div>
        <div className={classes.offers__item}>
          <img src="/images/communication.png" alt="communication" />
          <p>
            <a href="#">Communicate directly</a>
          </p>
        </div>
        <div className={classes.offers__item}>
          <img src="/images/booking.png" alt="booking" />
          <p>
            <a href="#">Book online</a>
          </p>
        </div>
        <div className={classes.offers__item}>
          <img src="/images/reviews.png" alt="reviews" />
          <p>
            <a href="#">Real guest reviews</a>
          </p>
        </div>
      </div>
    </div>
  )
}

Offers.displayName = 'Offers'

export default Offers
