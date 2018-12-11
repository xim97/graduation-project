import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    section: (state = "gifs", action) => {
        if (action.type === "SET_SECTION") {
            return action.section;
        }

        return state;
    },
    searchInput: (state = "", action) => {
        if (action.type === "SET_INPUT") {
            return action.searchInput
        }

        return state;
    },
    items: (state = [], action) => {
        if (action.type === "SET_ITEMS") {
            return [
                ...state,
                ...action.items
            ];
        }
        if (action.type === "RESET_ITEMS") {
            return [];
        }

        return state;
    },
    isLoading: (state = false, action) => {
        if (action.type === "SHOW_LOADING") return true;
        if (action.type === "HIDE_LOADING") return false;

        return state;
    },
    page: (state = 0, action) => {
        if (action.type === "NEXT_PAGE") return state + 1;
        if (action.type === "PREV_PAGE") return state - 1 >= 1 ? state - 1 : state;

        return state;
    },
    favouriteItems: (state = JSON.parse(localStorage.getItem("favourites")) || [], action) => {        
        if (action.type === "ADD_ITEM") {
            state.push(action.item);
            localStorage.setItem("favourites", JSON.stringify(state));
            return [
                ...state
            ];
        }
        if (action.type === "DELETE_ITEM") {
            state = state.filter(item => item.id !== action.item.id);
            localStorage.setItem("favourites", JSON.stringify(state));
            return [
                ...state
            ];
        }

        return state;
    }
})