import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Selectors from './Selectors.jsx'

function FilterPeople({ people, setPeople }) {
  const [adults, setAdults] = useState(people.adults)
  const [children, setChildren] = useState(people.children)
  const [rooms, setRooms] = useState(people.rooms)

  const [isDisabled, setDisabled] = useState({
    adultsBtnDec: true,
    adultsBtnInc: false,
    childrenBtnDec: true,
    childrenBtnInc: false,
    roomsBtnDec: true,
    roomsBtnInc: false,
  })

  const [selectors, setSelectors] = useState([])

  const handleAdultsDec = () => {
    setAdults((adults) => adults - 1)
  }

  const handleAdultsInc = () => {
    setAdults((adults) => adults + 1)
  }

  const handleChildrenDec = () => {
    setChildren((children) => children - 1)

    removeSelector()
  }

  const handleChildrenInc = () => {
    setChildren((children) => children + 1)

    addSelector()
  }

  const handleRoomsDec = () => {
    setRooms((rooms) => rooms - 1)
  }

  const handleRoomsInc = () => {
    setRooms((rooms) => rooms + 1)
  }

  useEffect(() => {
    if (adults <= 1) {
      setDisabled({ ...isDisabled, adultsBtnDec: true })
    } else if (adults >= 30) {
      setDisabled({ ...isDisabled, adultsBtnInc: true })
    } else if (adults >= 1 || adults <= 30) {
      setDisabled({ ...isDisabled, adultsBtnDec: false, adultsBtnInc: false })
    }

    setPeople({ ...people, adults: adults })
  }, [adults])

  useEffect(() => {
    if (children <= 0) {
      setDisabled({ ...isDisabled, childrenBtnDec: true })
    } else if (children >= 10) {
      setDisabled({ ...isDisabled, childrenBtnInc: true })
    } else if (children >= 1 || children <= 10) {
      setDisabled({
        ...isDisabled,
        childrenBtnDec: false,
        childrenBtnInc: false,
      })
    }

    setPeople({ ...people, children: children })
  }, [children])

  useEffect(() => {
    if (rooms <= 1) {
      setDisabled({ ...isDisabled, roomsBtnDec: true })
    } else if (rooms >= 30) {
      setDisabled({ ...isDisabled, roomsBtnInc: true })
    } else if (rooms >= 1 || rooms <= 30) {
      setDisabled({ ...isDisabled, roomsBtnDec: false, roomsBtnInc: false })
    }

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

FilterPeople.displayName = 'FilterPeople'

export default FilterPeople
