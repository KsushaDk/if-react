import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import useStyles from './Hotels.styles'

//slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

//components
import HotelItem from './HotelItem.jsx'

function HotelItems({ title }) {
  const classes = useStyles()

  const hotels = useSelector(({ hotels }) => hotels.popular || [])

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={classes.hotels}>
      <h2 className={classes.hotels__title}>{title}</h2>
      <div className={classes.hotels__carrousel}>
        <Slider {...settings}>
          {hotels.map((item) => {
            return <HotelItem item={item} key={item.id} />
          })}
        </Slider>
      </div>
    </div>
  )
}

HotelItems.propTypes = {
  title: PropTypes.string,
}

HotelItems.displayName = 'HotelItems'

export default HotelItems
