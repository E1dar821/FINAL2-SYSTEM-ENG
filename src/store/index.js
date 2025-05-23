import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginFormReducer from './slices/loginFormSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginForm'] // only persist loginForm
}

const rootReducer = combineReducers({
  loginForm: loginFormReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store) 