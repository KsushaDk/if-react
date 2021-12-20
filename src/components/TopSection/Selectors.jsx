import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setChildrenAge } from '../../redux/actions'
import useStyles from './TopSection.styles'

function Selectors({ selectors }) {
  const dispatch = useDispatch()
  const classes = useStyles()

  const [age, setAge] = useState([])

  const handleChange = useCallback((event) => {
    event.preventDefault()
    setAge((age) => [...age, ...[event.target.value]])
  }, [])

  useEffect(() => {
    dispatch(setChildrenAge(age))
  }, [dispatch, age])

  const ages = []

  for (let i = 0; i <= 17; i += 1) {
    ages.push(i)
  }

  const options = []

  for (let i = 0; i < selectors; i += 1) {
    options.push(
      <select key={i} onChange={handleChange}>
        {ages.map((option) => (
          <option key={option} value={option}>{`${option} years old`}</option>
        ))}
      </select>,
    )
  }

  if (selectors > 0) {
    return (
      <div className={classes.form__filter_people_focus_selector}>
        <label>
          What is the age of the child you’re
          <br />
          travelling with?
        </label>
        <>{options}</>
      </div>
    )
  }
  return null
}

Selectors.propTypes = {
  selectors: PropTypes.number,
}

Selectors.displayName = 'Selectors'

export default Selectors
