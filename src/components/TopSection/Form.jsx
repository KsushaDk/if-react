import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import useStyles from './TopSection.styles'

//actions
import { getAvailableHotels } from '../../redux/actions'

//components
import InputDestination from './InputDestination.jsx'
import InputDate from './InputDate.jsx'
import InputPeople from './InputPeople.jsx'
import FilterPeople from './FilterPeople.jsx'

function Form() {
  const dispatch = useDispatch()
  const classes = useStyles()

  const [filter, setFilter] = useState(false)

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(getAvailableHotels())
      setFilter(false)
    },
    [dispatch],
  )

  return (
    <>
      <form className={classes.top_section__form} onSubmit={handleSubmit}>
        <InputDestination
          onClick={() => {
            setFilter(false)
          }}
        />
        <InputDate
          onClick={() => {
            setFilter(false)
          }}
        />
        <InputPeople
          onClick={() => {
            setFilter((filter) => !filter)
          }}
        />
        <div className={classes.form__div_btn}>
          <input
            className={classes.form__input_btn}
            type="submit"
            value="Search"
          />
        </div>

        {filter && <FilterPeople />}
      </form>
    </>
  )
}

Form.displayName = 'Form'

export default Form
