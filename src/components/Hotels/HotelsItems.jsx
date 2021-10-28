import React from 'react'
import PropTypes from 'prop-types'

import HotelItem from './HotelItem.jsx'
import './Hotels.css'

function HotelsItems({ dataHotels, title }) {
  return (
    <>
      <h2 className="hotels__title">{title}</h2>
      <div className="hotels__carrousel">
        {dataHotels.map((item) => {
          return <HotelItem item={item} key={item.id} />
        })}
      </div>
    </>
  )
}

HotelsItems.propTypes = {
  dataHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
}

export default HotelsItems
