import { createSlice } from '@reduxjs/toolkit'

export interface ColorFieldsState {
    colorFieldsArray: Array<string>
}

const initialState: ColorFieldsState = {
    colorFieldsArray: ['#D199E7', '#72C1ED', '#A196F1', '#7D72ED'],
}

export const colorFieldsReducer = createSlice({
    name: 'colorFields',
    initialState,
    reducers: {
        changeButtonsColors: (state: ColorFieldsState) =>{
           const lastItem: string = state.colorFieldsArray.pop()
            state.colorFieldsArray.unshift(lastItem)
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeButtonsColors } = colorFieldsReducer.actions

export default colorFieldsReducer.reducer