import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMeals as fetchMealsApi } from "../services/api";
import { FetchOptions } from "../hooks/useFetch.d";
import { ItemsState } from "./ItemsSlice.d"

const initialState: ItemsState = {
    itemsData: [],
    filteredItems: [],
    categories: [],
    selectedCategory: "",
    currentIndex: 6,
    quantities: {},
    status: "idle",
};

type ThunkArgs = {
    fetchWithLogging: (url: string, options?: FetchOptions) => Promise<Response>;
};

export const fetchMealsThunk = createAsyncThunk(
    "items/fetchMeals",
    async ({ fetchWithLogging }: ThunkArgs) => {
    return await fetchMealsApi(fetchWithLogging);
    }
);

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
    selectCategory(state, action: PayloadAction<string>) {
        state.selectedCategory = action.payload;
        const filtered = state.itemsData.filter(
        (item) => item.category === action.payload
        );
        state.filteredItems = filtered;
        state.currentIndex = 6;
    },
    loadMore(state) {
        state.currentIndex += 6;
    },
    updateQuantity(
        state,
        action: PayloadAction<{ id: string; quantity: number }>
    ) {
        state.quantities[action.payload.id] = action.payload.quantity;
    },
},
    extraReducers: (builder) => {
    builder
        .addCase(fetchMealsThunk.pending, (state) => {
        state.status = "loading";
        })
        .addCase(fetchMealsThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.itemsData = action.payload;

        const categories = [...new Set(action.payload.map((item) => item.category))];
        const initialQuantities: Record<string, number> = {};
        action.payload.forEach((item) => {
            initialQuantities[item.id] = 1;
        });

        state.categories = categories;
        state.quantities = initialQuantities;
        state.selectedCategory = categories[0] ?? "";
        state.filteredItems = action.payload.filter(
            (item) => item.category === categories[0]
        );
        })
        .addCase(fetchMealsThunk.rejected, (state) => {
        state.status = "failed";
        });
    },
});

export const { selectCategory, loadMore, updateQuantity } = itemsSlice.actions;
export default itemsSlice.reducer;
