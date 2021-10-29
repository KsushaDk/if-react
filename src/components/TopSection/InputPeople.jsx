import React from 'react'

function InputPeople() {
  return (
    <div className="form__div-people">
      <input
        className="form__input form__input-people"
        type="text"
        placeholder="Adults"
      />
      <input
        className="form__input form__input-people"
        type="text"
        placeholder="Children"
      />
      <input
        className="form__input form__input-people-last"
        type="text"
        placeholder="Room"
      />
    </div>
  )
}

export default InputPeople
