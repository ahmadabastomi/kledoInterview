import { combineReducers } from 'redux'

import news from './news'
import transactions from './transactions'

const appReducer = combineReducers({
   news,
   transactions
})

export default appReducer