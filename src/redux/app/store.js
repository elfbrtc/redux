import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'
import countryReducer from '../features/country/countrySlice'

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    country : countryReducer

  },
})