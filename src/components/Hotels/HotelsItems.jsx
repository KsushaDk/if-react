import React from 'react'
import PropTypes from 'prop-types'

import HotelItem from './HotelItem.jsx'
import './Hotels.css'

function HotelsItems(props) {
  return (
    <>
      <h2 className="hotels__title">{props.title}</h2>
      <div className="hotels__carrousel">
        {props.data.map((item) => {
          return <HotelItem item={item} key={item.id} />
        })}
      </div>
    </>
  )
}

HotelsItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
}

export default HotelsItems
