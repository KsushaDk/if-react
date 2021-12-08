import React from 'react'
import useStyles from './TopSection.styles'

function Stores() {
  const classes = useStyles()

  return (
    <div className={classes.top_section__apps}>
      <div className={classes.top_section__apps_google}>
        <a href="#"></a>
      </div>
      <div className={classes.top_section__apps_apple}>
        <a href="#"></a>
      </div>
    </div>
  )
}

Stores.displayName = 'Stores'

export default Stores
