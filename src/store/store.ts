import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { postApi } from 'src/services/api';
import cartReducer from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export default store;
