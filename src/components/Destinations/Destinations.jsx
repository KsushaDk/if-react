import React from 'react'
import useStyles from './Destinations.styles'

function Destinations() {
  const classes = useStyles()
  return (
    <div className={classes.destinations}>
      <h2 className={classes.destinations__title}>The best destinations</h2>
      <div className={classes.destinations__btns}>
        <button>
          <a href="#">Regions</a>
        </button>
        <button>
          <a href="#">Cities</a>
        </button>
        <button>
          <a href="#">Places of interest</a>
        </button>
      </div>
      <div className={classes.destinations__carrousel}>
        <div>
          <img
            className={classes.destinations__carrousel_img}
            src="/images/Paris.png"
            alt="Paris"
          />
          <p>
            <a href="#">Paris</a>
          </p>
        </div>
        <div>
          <img
            className={classes.destinations__carrousel_img}
            src="/images/Norway.png"
            alt="Norway"
          />
          <p>
            <a href="#">Norway</a>
          </p>
        </div>
        <div>
          <img
            className={classes.destinations__carrousel_img}
            src="/images/Budapest.png"
            alt="Budapest"
          />
          <p>
            <a href="#">Budapest</a>
          </p>
        </div>
        <div>
          <img
            className={classes.destinations__carrousel_img}
            src="/images/Island.png"
            alt="Island"
          />
          <p>
            <a href="#">Island</a>
          </p>
        </div>
      </div>
    </div>
  )
}

Destinations.displayName = 'Footer'

export default Destinations
