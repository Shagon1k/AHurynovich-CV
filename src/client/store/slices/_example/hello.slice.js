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

// NOTE: Slice actions should always be independent exports (Code Convention)
export const { makeHello, makeBye } = helloSlice.actions;
// NOTE: Slice default export should always be according reducer (Code Convention)
export default helloSlice.reducer;
