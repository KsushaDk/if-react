import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { userReducer } from './reducers/userReducer'

const store = createStore(userReducer, devToolsEnhancer())

export default store
