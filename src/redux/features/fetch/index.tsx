import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export interface initialFetchState {
    contents: [],
    isLoading: boolean,
    error: boolean | string,
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return data
    }
)

export const contentSlice = createSlice({
    name: 'content',
    initialState: {
        contents: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state: initialFetchState) => {
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state: initialFetchState, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchContent.rejected, (state: initialFetchState, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default contentSlice.reducer