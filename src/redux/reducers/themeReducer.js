import { handleActions } from 'redux-actions'

//actions
import { setTheme } from '../actions'

//constants
import { initialThemeState } from '../constants/initialState'

export const themeReducer = handleActions(
  {
    [setTheme]: (state, { payload: theme }) => {
      return {
        ...state,
        theme,
      }
    },
  },
  initialThemeState,
)
