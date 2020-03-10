import * as types from "./types"
export const intiateLoading = (status) => {
    return { type: types.INTIATE_LOADING, status: status }
}
export const setLoading = (loadingStatus) => {
    return { type: types.LOADING, loadingStatus }
}