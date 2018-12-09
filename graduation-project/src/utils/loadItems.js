import createRequest from "./createRequest";

export default function loadItems(dispatch, getState) {
    dispatch({ type: "SHOW_LOADING" });
    const state = getState();
    const request = createRequest(state.section, state.searchInput, state.page);    
    fetch(request)
        .then(response => response.json())
        .then(response => {           
            if (response.data.length > 0) {                
                dispatch({ type: "SET_ITEMS", items: response.data });
            }
            dispatch({ type: "HIDE_LOADING" });
        })
}