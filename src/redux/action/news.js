import {
    FETCH_NEWS_DATA
} from '../config'

export const getNewsData = value => ({ type: FETCH_NEWS_DATA, value })
