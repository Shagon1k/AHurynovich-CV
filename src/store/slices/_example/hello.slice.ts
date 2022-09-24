import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isHello: false,
};

const helloSlice = createSlice({
    name: 'hello',
    initialState,
    reducers: {
        makeHello(state) {
            state.isHello = true;
        },
        makeBye(state) {
            state.isHello = false;
        },
    },
});

// Note: Slice actions should always be independent exports (Code Convention)
export const { makeHello, makeBye } = helloSlice.actions;
// Note: Slice default export should always be according reducer (Code Convention)
export default helloSlice.reducer;

export type HelloState = typeof initialState;
