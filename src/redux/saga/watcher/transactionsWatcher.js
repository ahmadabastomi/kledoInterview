import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
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
} from '../../config'



export const transactionsWatcher = [
    takeLatest(FETCH_LIST_TRANSACTIONS, workerGetListTransactions),
    takeLatest(FETCH_TRANSACTION, workerGetTransaction),
    takeLatest(ADD_TRANSACTION, workerAddTransaction),
    takeLatest(UPDATE_TRANSACTION, workerUpdateTransaction),
    takeLatest(DELETE_TRANSACTION, workerDeleteTransaction),
    takeLatest(UPDATE_TRANSACTION_STATUS, workerUpdateTransactionStatus),
]

const fetchListTransactions = async (body) => {
    const { name } = body
    try {
        const response = await axios.get(`https://api.jokolodang.com/api/v1/payments?name=${name}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getTransaction = async (body) => {
    const {id} = body
    try {
        const response = await axios.get(`https://api.jokolodang.com/api/v1/payments/${id}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const addTransaction = async (body) => {
    const {data} = body
    try {
        const response = await axios.post(`https://api.jokolodang.com/api/v1/payments`,data);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const updateTransaction = async (body) => {
    const {id,data} = body
    try {
        const response = await axios.put(`https://api.jokolodang.com/api/v1/payments/${id}`,data);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const deleteTransaction = async (body) => {
    const {id} = body
    try {
        const response = await axios.delete(`https://api.jokolodang.com/api/v1/payments/${id}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const updateTransactionStatus = async (body) => {
    const {id,status} = body
    try {
        const response = await axios.patch(`https://api.jokolodang.com/api/v1/payments/${id}/${status}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

function* workerGetListTransactions(action) {
    try {
        const response = yield call(fetchListTransactions, action.value);
        yield put({ type: FETCH_LIST_TRANSACTIONS_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: FETCH_LIST_TRANSACTIONS_FAILED, error });
    }
}

function* workerGetTransaction(action) {
    try {
        const response = yield call(getTransaction, action.value);
        yield put({ type: FETCH_TRANSACTION_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: FETCH_TRANSACTION_FAILED, error });
    }
}

function* workerAddTransaction(action) {
    try {
        const response = yield call(addTransaction, action.value.payload);
        yield put({ type: ADD_TRANSACTION_SUCCESS, payload: response });
        yield action.value.navigation.replace('HomePage')
    } catch (error) {
        yield put({ type: ADD_TRANSACTION_FAILED, error });
    }
}

function* workerUpdateTransaction(action) {
    try {
        const response = yield call(updateTransaction, action.value.payload);
        yield put({ type: UPDATE_TRANSACTION_SUCCESS, payload: response });
        yield action.value.navigation.replace('HomePage')
    } catch (error) {
        yield put({ type: UPDATE_TRANSACTION_FAILED, error });
    }
}

function* workerDeleteTransaction(action) {
    try {
        const response = yield call(deleteTransaction, action.value);
        yield put({ type: DELETE_TRANSACTION_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: DELETE_TRANSACTION_FAILED, error });
    }
}

function* workerUpdateTransactionStatus(action) {
    try {
        const response = yield call(updateTransactionStatus, action.value);
        yield put({ type: UPDATE_TRANSACTION_STATUS_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: UPDATE_TRANSACTION_STATUS_FAILED, error });
    }
}




