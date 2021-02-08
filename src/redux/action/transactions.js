import {
    FETCH_LIST_TRANSACTIONS,
    FETCH_TRANSACTION,
    ADD_TRANSACTION,
    UPDATE_TRANSACTION,
    DELETE_TRANSACTION,
    UPDATE_TRANSACTION_STATUS,
    SET_FILTER_VALUE
} from '../config'

export const getListTransactions = value => ({ type: FETCH_LIST_TRANSACTIONS, value})
export const getTransaction = value => ({ type: FETCH_TRANSACTION, value })
export const addTransaction = value => ({ type: ADD_TRANSACTION, value })
export const updateTransaction = value => ({ type: UPDATE_TRANSACTION, value })
export const deleteTransaction = value => ({ type: DELETE_TRANSACTION, value })
export const updateTransactionStatus = value => ({ type: UPDATE_TRANSACTION_STATUS, value })
export const setFilterValue = value => ({type: SET_FILTER_VALUE, value});

