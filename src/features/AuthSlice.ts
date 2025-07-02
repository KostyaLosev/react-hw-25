import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthState, User } from "./AuthSlice.d"

const initialState: AuthState = {
    user: null,
    email: '',
    password: '',
    loading: false,
    error: null,
    success: false,
    checking: true,
};

export const loginUser = createAsyncThunk<
    User,
    { email: string; password: string }, 
    { rejectValue: string }
>(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return { email: user.email };
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    setChecking(state, action: PayloadAction<boolean>) {
    state.checking = action.payload;
    },    
    setUser(state, action: PayloadAction<User | null>) {
        state.user = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
        state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
        state.password = action.payload;
    },
    resetForm(state) {
        state.email = '';
        state.password = '';
        state.error = null;
        state.success = false;
    },
    logout(state) {
        state.user = null;
        state.success = false;
    },
    },
    extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
        })
        .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
        state.success = false;
        });
    },
});

export const { setUser, setEmail, setPassword, resetForm, logout, setChecking } = authSlice.actions;
export default authSlice.reducer;