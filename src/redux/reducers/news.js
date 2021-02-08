import {
    FETCH_NEWS_DATA,
    FETCH_NEWS_DATA_FAILED,
    FETCH_NEWS_DATA_SUCCESS
} from '../config'

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_DATA:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case FETCH_NEWS_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case FETCH_NEWS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.articles
            }        
        default:
            return state
    }
}