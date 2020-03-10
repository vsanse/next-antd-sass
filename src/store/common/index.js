import initialState from "../initialState";
import * as types from "./types";

export default function commonReducer(state = initialState.common, action) {
    switch (action.type) {
        case types.LOADING:
            return {
                ...state,
                loading: action.loadingStatus
            }

        default:
            return state;
    }
}
