import React from 'react'

import apple from '../../../public/images/app_store.svg'
import google from '../../../public/images/google_play.svg'

function Store() {
  return (
    <div className="top-section__apps">
      <div
        className="top-section__apps-google"
        style={{ backgroundImage: `url(${google})` }}
      ></div>
      <div
        className="top-section__apps-apple"
        style={{ backgroundImage: `url(${apple})` }}
      ></div>
    </div>
  )
}

export default Store
