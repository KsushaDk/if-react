import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import ReactLoading from 'react-loading'

//styles
import './index.css'

//components
import App from './components/App.jsx'

//store
import { store, persistor } from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <ReactLoading
            className="loading"
            type={'bubbles'}
            color={'#f3f3f4'}
            height="10"
            width="10"
          />
        }
        persistor={persistor}
      >
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
