import React, { useEffect, useState, useCallback } from 'react'

import Selectors from './Selectors.jsx'

import { useDispatch, useSelector } from 'react-redux'

import {
  setAdultsInfo,
  setChildrenInfo,
  setRoomsInfo,
} from '../../redux/actions/formActions'

function FilterPeople() {
  const people = useSelector(({ form }) => form)
  const dispatch = useDispatch()

  const [adults, setAdults] = useState(people.adults)
  const [children, setChildren] = useState(people.children)
  const [rooms, setRooms] = useState(people.rooms)

  const [isDisabled, setDisabled] = useState({
    adultsBtnDec: false,
    adultsBtnInc: false,
    childrenBtnDec: false,
    childrenBtnInc: false,
    roomsBtnDec: false,
    roomsBtnInc: false,
  })

  const handleClickDec = useCallback(
    (mode) => (event) => {
      event.preventDefault()

      if (mode === 'adults') {
        setAdults((adults) => adults - 1)
      } else if (mode === 'children') {
        setChildren((children) => children - 1)
      } else if (mode === 'rooms') {
        setRooms((rooms) => rooms - 1)
      }
    },
    [],
  )

  const handleClickInc = useCallback(
    (mode) => (event) => {
      event.preventDefault()

      if (mode === 'adults') {
        setAdults((adults) => adults + 1)
      } else if (mode === 'children') {
        setChildren((children) => children + 1)
      } else if (mode === 'rooms') {
        setRooms((rooms) => rooms + 1)
      }
    },
    [],
  )

  useEffect(() => {
    if (adults <= 1) {
      setDisabled((isDisabled) => ({ ...isDisabled, adultsBtnDec: true }))
    } else if (adults >= 30) {
      setDisabled((isDisabled) => ({ ...isDisabled, adultsBtnInc: true }))
    } else if (adults >= 1 || adults <= 30) {
      setDisabled((isDisabled) => ({
        ...isDisabled,
        adultsBtnDec: false,
        adultsBtnInc: false,
      }))
    }

    dispatch(setAdultsInfo(adults))
  }, [dispatch, adults])

  useEffect(() => {
    if (children <= 0) {
      setDisabled((isDisabled) => ({ ...isDisabled, childrenBtnDec: true }))
    } else if (children >= 10) {
      setDisabled((isDisabled) => ({ ...isDisabled, childrenBtnInc: true }))
    } else if (children >= 1 || children <= 10) {
      setDisabled((isDisabled) => ({
        ...isDisabled,
        childrenBtnDec: false,
        childrenBtnInc: false,
      }))
    }

    dispatch(setChildrenInfo(children))
  }, [dispatch, children])

  useEffect(() => {
    if (rooms <= 1) {
      setDisabled((isDisabled) => ({ ...isDisabled, roomsBtnDec: true }))
    } else if (rooms >= 30) {
      setDisabled((isDisabled) => ({ ...isDisabled, roomsBtnInc: true }))
    } else if (rooms >= 1 || rooms <= 30) {
      setDisabled((isDisabled) => ({
        ...isDisabled,
        roomsBtnDec: false,
        roomsBtnInc: false,
      }))
    }

    dispatch(setRoomsInfo(rooms))
  }, [dispatch, rooms])

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
            onClick={handleClickDec('adults')}
          >
            -
          </button>
          <input value={adults} id="adults" type="text" readOnly />
          <button
            disabled={isDisabled.adultsBtnInc}
            className={isDisabled.adultsBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={handleClickInc('adults')}
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
            onClick={handleClickDec('children')}
          >
            -
          </button>
          <input value={children} id="children" type="text" readOnly />
          <button
            disabled={isDisabled.childrenBtnInc}
            className={isDisabled.childrenBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={handleClickInc('children')}
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
            onClick={handleClickDec('rooms')}
          >
            -
          </button>
          <input value={rooms} id="rooms" type="text" readOnly />
          <button
            disabled={isDisabled.roomsBtnInc}
            className={isDisabled.roomsBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={handleClickInc('rooms')}
          >
            +
          </button>
        </div>
      </div>
      {children > 0 && <Selectors selectors={children} />}
    </div>
  )
}

FilterPeople.displayName = 'FilterPeople'

export default FilterPeople
