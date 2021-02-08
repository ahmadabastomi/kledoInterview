import {
    FETCH_LIST_TRANSACTIONS,
    FETCH_LIST_TRANSACTIONS_FAILED,
    FETCH_LIST_TRANSACTIONS_SUCCESS,
    FETCH_TRANSACTION,
    FETCH_TRANSACTION_FAILED,
    FETCH_TRANSACTION_SUCCESS,
    ADD_TRANSACTION,
    ADD_TRANSACTION_FAILED,
    ADD_TRANSACTION_SUCCESS,
    UPDATE_TRANSACTION,
    UPDATE_TRANSACTION_FAILED,
    UPDATE_TRANSACTION_SUCCESS,
    DELETE_TRANSACTION,
    DELETE_TRANSACTION_FAILED,
    DELETE_TRANSACTION_SUCCESS,
    UPDATE_TRANSACTION_STATUS,
    UPDATE_TRANSACTION_STATUS_FAILED,
    UPDATE_TRANSACTION_STATUS_SUCCESS
} from '../config'

const initialState = {
    dataTransactions: [],
    dataTransaction: {
        name: ''
    },
    isLoading: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_TRANSACTIONS:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case FETCH_LIST_TRANSACTIONS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case FETCH_LIST_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                dataTransactions: action.payload.data.data
            }
        case FETCH_TRANSACTION:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case FETCH_TRANSACTION_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case FETCH_TRANSACTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                dataTransaction: action.payload.data.data
            }
        case ADD_TRANSACTION:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case ADD_TRANSACTION_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case ADD_TRANSACTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
            }
        case UPDATE_TRANSACTION:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case UPDATE_TRANSACTION_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case UPDATE_TRANSACTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case DELETE_TRANSACTION_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case DELETE_TRANSACTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
            }
        case UPDATE_TRANSACTION_STATUS:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case UPDATE_TRANSACTION_STATUS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case UPDATE_TRANSACTION_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
            }
        default:
            return state
    }
}