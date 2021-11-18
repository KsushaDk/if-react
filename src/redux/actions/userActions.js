import { createActions } from 'redux-actions'

export const { loginUser, logoutUser, addUser } = createActions(
  'LOGIN_USER',
  'LOGOUT_USER',
  'ADD_USER',
)
