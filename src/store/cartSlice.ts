import { createSlice } from '@reduxjs/toolkit';

interface IState {
    cart: [];
}

const init: IState = {
    cart: [],
};

const cardSlice = createSlice({
    name: 'cart',
    initialState: init,
    reducers: {
        add: (state: IState, action: any) => {
            state.cart.push(action.payload);
        },
        remove: () => {},
    },
});

const cardReducer = cardSlice.reducer;
export const { add, remove } = cardSlice.actions;
export default cardReducer;
