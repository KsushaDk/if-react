import React from 'react'
import useStyles from './Reviews.styles'

function Reviews() {
  const classes = useStyles()

  return (
    <div className={classes.reviews}>
      <h2 className={classes.reviews__title}>Guests reviews</h2>
      <div className={classes.reviews__items}>
        <div className={classes.reviews__item}>
          <img
            className={classes.description_img}
            src="/images/Bali.svg"
            alt="Bali"
          />
          <div className={classes.description}>
            <div className={classes.description_name}>
              <div>
                <a href="#">Ubud Bali Resort&#38;SPA</a>
                <a href="#">Bali, Indonesia</a>
              </div>

              <div>
                <div className={classes.describtion_rate}>9,4</div>
                <p>1324 reviews</p>
              </div>
            </div>
          </div>
          <div className={classes.describtion_comment}>
            <div>
              <img src="/images/grey_user.svg" alt="user" />

              <span>
                Hanna Ivanova <br /> 🇺🇦 Ukraine
              </span>
            </div>
            <p>
              Great location, really pleasant and clean rooms, but the thing
              that makes this such a good place to stay are the staff. All of
              the people are incredibly helpful and generous with their time and
              advice.
            </p>
          </div>
        </div>
        <div className={classes.reviews__item}>
          <img
            className={classes.description_img}
            src="/images/Rotterdam.svg"
            alt="Rotterdam"
          />
          <div className={classes.description}>
            <div className={classes.description_name}>
              <div>
                <a href="#">King Kong Hostel</a>
                <a href="#">Rotterdam, Netherlands</a>
              </div>
              <div>
                <div className={classes.describtion_rate}>8,9</div>
                <p>2016 reviews</p>
              </div>
            </div>
            <div className={classes.describtion_comment}>
              <div>
                <img src="/images/grey_user.svg" alt="user" />

                <span>
                  Adam Smith <br /> 🇺🇸 USA
                </span>
              </div>
              <p>
                I`&#39;`ve been in this hostel for a month and here is the best
                hostel of all Excellent management of excellent and ethical
                staff and bedrooms Bathrooms are always clean and excellent Most
                importantly, those who work here are kind and good-natured.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.reviews__item}>
          <img
            className={classes.description_img}
            src="/images/Ourika.svg"
            alt="Ourika"
          />
          <div className={classes.description}>
            <div className={classes.description_name}>
              <div>
                <a href="#">Rokoko Hotel</a>
                <a href="#">Ourika, Marocco</a>
              </div>
              <div>
                <div className={classes.describtion_rate}>9,1</div>
                <p>815 reviews</p>
              </div>
            </div>
          </div>
          <div className={classes.describtion_comment}>
            <div>
              <img src="/images/grey_user.svg" alt="user" />

              <span>
                Anika Messer <br /> 🇩🇪 Germany
              </span>
            </div>
            <p>
              Efficient, friendly, professional, and appropriately attentive.
              Great hotel in a great location. Easy access to all the
              surrounding historical sites. Staff is fantastic. Will definitely
              stay at this location during my next stay in Marocco.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Reviews.displayName = 'Reviews'

export default Reviews
