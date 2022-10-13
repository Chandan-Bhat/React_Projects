import { configureStore, createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "newsData",
    initialState: {cards:[], search: false, count: 3},
    reducers: {
        changeSearch: (state) => {
            state.search = !state.search;
        },
        changeCards: (state, action) => {
            state.cards = action.payload;
        },
        cardCount: (state) => {
            if(state.count === 3) state.count = 7;
            else if(state.count === 7) state.count = 3;
        }
    }
})

const selectSlice = createSlice({
    name: "selectData",
    initialState: {country: "in", category: "business"},
    reducers: {
        changeCountry: (state, action) => {
            state.country = action.payload;
        },
        changeCategory: (state, action) => {
            state.category = action.payload;
        }
    }
})

const store = configureStore({
    reducer: {
        newsData: newsSlice.reducer,
        selectData: selectSlice.reducer
    }
})

export const actions = selectSlice.actions;
export const updaters = newsSlice.actions;
export default store;