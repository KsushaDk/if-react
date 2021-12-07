import React from 'react'
import useStyles from './TopSection.styles'

//components
import Navigation from './Navigation.jsx'
import Form from './Form.jsx'
import Stores from './Stores.jsx'

function TopSection() {
  const classes = useStyles()

  return (
    <div className={classes.top_section}>
      <Navigation />
      <h2 className={classes.top_section__title}>
        Discover stays
        <br />
        to live, work or just relax
      </h2>
      <Form />
      <Stores />
    </div>
  )
}

TopSection.displayName = 'TopSection'

export default TopSection
