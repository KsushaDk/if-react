import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userReducer } from './userReducer'
import { hotelReducer } from './hotelReducer'
import { formReducer } from './formReducer'

const rootReducer = combineReducers({
  user: userReducer,
  hotels: hotelReducer,
  form: formReducer,
})

export default persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
)
