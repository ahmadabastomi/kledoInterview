import { combineReducers } from 'redux'

import transactions from './transactions'

const appReducer = combineReducers({
   transactions
})

export default appReducer