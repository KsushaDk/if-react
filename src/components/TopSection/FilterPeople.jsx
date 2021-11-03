import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Selectors from './Selectors.jsx'

function FilterPeople({ people, setPeople }) {
  const [adults, setAdults] = useState(people.adults)
  const [children, setChildren] = useState(people.children)
  const [rooms, setRooms] = useState(people.rooms)

  const [isDisabled, setDisabled] = useState({
    adultsBtnDec: false,
    adultsBtnInc: false,
    childrenBtnDec: true,
    childrenBtnInc: false,
    roomsBtnDec: false,
    roomsBtnInc: false,
  })

  const [selectors, setSelectors] = useState([])

  const handleAdultsDec = (e) => {
    e.preventDefault()
    if (adults <= 2) {
      setDisabled({ ...isDisabled, adultsBtnDec: true })
    } else {
      setDisabled({ ...isDisabled, adultsBtnDec: false })
      setDisabled({ ...isDisabled, adultsBtnInc: false })
    }

    setAdults((adults) => adults - 1)
  }

  const handleAdultsInc = (e) => {
    e.preventDefault()
    if (adults >= 29) {
      setDisabled({ ...isDisabled, adultsBtnInc: true })
    } else {
      setDisabled({ ...isDisabled, adultsBtnDec: false })
    }

    setAdults((adults) => adults + 1)
  }

  const handleChildrenDec = (e) => {
    e.preventDefault()
    if (children <= 1) {
      setDisabled({ ...isDisabled, childrenBtnDec: true })
    } else {
      setDisabled({ ...isDisabled, childrenBtnDec: false })
      setDisabled({ ...isDisabled, childrenBtnInc: false })
    }

    setChildren((children) => children - 1)

    removeSelector()
  }

  const handleChildrenInc = (e) => {
    e.preventDefault()
    if (children >= 9) {
      setDisabled({ ...isDisabled, childrenBtnInc: true })
    } else {
      setDisabled({ ...isDisabled, childrenBtnDec: false })
    }

    setChildren((children) => children + 1)

    addSelector()
  }

  const handleRoomsDec = (e) => {
    e.preventDefault()
    if (rooms <= 2) {
      setDisabled({ ...isDisabled, roomsBtnDec: true })
    } else {
      setDisabled({ ...isDisabled, roomsBtnDec: false })
      setDisabled({ ...isDisabled, roomsBtnInc: false })
    }

    setRooms((rooms) => rooms - 1)
  }

  const handleRoomsInc = (e) => {
    e.preventDefault()
    if (rooms >= 29) {
      setDisabled({ ...isDisabled, roomsBtnInc: true })
    } else {
      setDisabled({ ...isDisabled, roomsBtnDec: false })
    }

    setRooms((rooms) => rooms + 1)
  }

  useEffect(() => {
    setPeople({ ...people, adults: adults })
  }, [adults])

  useEffect(() => {
    setPeople({ ...people, children: children })
  }, [children])

  useEffect(() => {
    setPeople({ ...people, rooms: rooms })
  }, [rooms])

  function addSelector() {
    setSelectors([...selectors, { id: Date.now() }])
  }

  function removeSelector() {
    setSelectors(selectors.slice(1))
  }

  return (
    <div className="form__filter-people-focus">
      <div className="form__filter-div">
        <span>
          <label htmlFor="adults">Adults</label>
        </span>
        <div>
          <button
            disabled={isDisabled.adultsBtnDec}
            className={isDisabled.adultsBtnDec ? 'disabled' : ''}
            value="dec"
            onClick={handleAdultsDec}
          >
            -
          </button>
          <input value={adults} id="adults" type="text" readOnly />
          <button
            disabled={isDisabled.adultsBtnInc}
            className={isDisabled.adultsBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={handleAdultsInc}
          >
            +
          </button>
        </div>
      </div>
      <div className="form__filter-div">
        <span>
          <label htmlFor="children">Children</label>
        </span>
        <div>
          <button
            disabled={isDisabled.childrenBtnDec}
            className={isDisabled.childrenBtnDec ? 'disabled' : ''}
            value="dec"
            onClick={handleChildrenDec}
          >
            -
          </button>
          <input value={children} id="children" type="text" readOnly />
          <button
            disabled={isDisabled.childrenBtnInc}
            className={isDisabled.childrenBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={handleChildrenInc}
          >
            +
          </button>
        </div>
      </div>
      <div className="form__filter-div">
        <span>
          <label htmlFor="rooms">Rooms</label>
        </span>
        <div>
          <button
            disabled={isDisabled.roomsBtnDec}
            className={isDisabled.roomsBtnDec ? 'disabled' : ''}
            value="dec"
            onClick={handleRoomsDec}
          >
            -
          </button>
          <input value={rooms} id="rooms" type="text" readOnly />
          <button
            disabled={isDisabled.roomsBtnInc}
            className={isDisabled.roomsBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={handleRoomsInc}
          >
            +
          </button>
        </div>
      </div>
      {selectors.length > 0 ? <Selectors selectors={selectors} /> : <> </>}
    </div>
  )
}

FilterPeople.propTypes = {
  setPeople: PropTypes.func,
  people: PropTypes.object,
}
export default FilterPeople
