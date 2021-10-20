import React from 'react'

import logo from '../../../public/images/logo.svg'
import night from '../../../public/images/night.svg'
import user from '../../../public/images/user.svg'

function Navigation() {
  return (
    <div className="top-section__navigation">
      <img src={logo} alt={'logo'} />
      <div className="navigation_group">
        <div className="navigation_div">Stays</div>
        <div className="navigation_div">Attractions</div>
        <img className="navigation_img" src={night} alt={'night'} />
        <img className="navigation_img" src={user} alt={'user'} />
      </div>
    </div>
  )
}

export default Navigation
