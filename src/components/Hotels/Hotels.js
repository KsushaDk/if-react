import React from 'react'
import PropTypes from 'prop-types'
import HotelItem from './HotelItem'

function HotelsItems(props) {
  return (
    <div className="hotels__carrousel">
      { props.data.map( item => {
        return <HotelItem item={item} key={item.id}/>
       })
      }
    </div>
  )
}

HotelsItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default HotelsItems