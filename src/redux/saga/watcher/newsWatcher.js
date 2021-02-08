import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
    FETCH_NEWS_DATA,
    FETCH_NEWS_DATA_FAILED,
    FETCH_NEWS_DATA_SUCCESS
} from '../../config'


export const newsWatcher = [
    takeLatest(FETCH_NEWS_DATA, workerGetNewsData),
]

const getNewsData = async (body) => {
    const { page } = body;
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ac428514b46f40d8b11a9abdabdddfbf&pageSize=10&page=${page}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

function* workerGetNewsData(action) {
    try {
        const response = yield call(getNewsData, action.value);
        yield put({ type: FETCH_NEWS_DATA_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: FETCH_NEWS_DATA_FAILED, error });
    }
}


