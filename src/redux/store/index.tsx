import { configureStore } from '@reduxjs/toolkit'
import colorFieldsReducer from '../features/colorFieldsSlice'
import contentSliceReducer from "../features/fetch";


export const store = configureStore({
    reducer: {    colorFields: colorFieldsReducer,
        contentSlice: contentSliceReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

