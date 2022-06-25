import {
    CaseReducer,
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

interface IProduct {
    name: string;
    price: number;
    quantity: number;
}
interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type IStatus = 'idle' | 'loading' | 'success' | 'error';
enum Status {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface IState {
    cart: IProduct[];
    number: number;
    post: IPost[];
    status: IStatus;
}

const init: IState = {
    cart: [],
    number: 0,
    post: [],
    status: 'idle',
};

const increment: CaseReducer<IState, PayloadAction<number>> = (
    state,
    action
) => {
    return {
        ...state,
        number: state.number + action.payload,
    };
};

const cardSlice = createSlice({
    name: 'cart',
    initialState: init,
    reducers: {
        add: (state: IState, action: PayloadAction<IProduct>) => {
            state.cart.push(action.payload);
        },
        increment,
        remove: () => {},
        setPost: (state: IState, action: PayloadAction<IPost>) => {},
        setStatus: () => {},
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = 'success';
            state.post = action.payload;
        });
        builder.addCase(fetchProduct.rejected, (state) => {
            state.status = 'error';
        });
    },
});

const cartReducer = cardSlice.reducer;
export const { add, remove, setPost } = cardSlice.actions;

export default cartReducer;

/*** Redux thunk idea */
export const fetchProduct = createAsyncThunk('post/fetch', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await res.json()) as Promise<IPost[]>;
});

// export function fetchProduct() {
//     return async function (dispatch) {
//         try {
//             const res = await fetch(
//                 'https://jsonplaceholder.typicode.com/posts'
//             );
//             const data = await res.json();
//             dispatch(setPost(data));
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }
