import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userReducer } from './reducers/userReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const configureStore = () => {
  const store = createStore(persistedReducer, devToolsEnhancer())
  const persistor = persistStore(store)
  return { store, persistor }
}

export const { store, persistor } = configureStore()
