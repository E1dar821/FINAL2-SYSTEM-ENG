import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  isLoggedIn: false
}

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.email = ''
      state.isLoggedIn = false
    }
  }
})

export const { login, logout } = loginFormSlice.actions

// Selectors
export const selectEmail = (state) => state.loginForm.email
export const selectIsLoggedIn = (state) => state.loginForm.isLoggedIn

export default loginFormSlice.reducer 