import { newsWatcher } from './newsWatcher'
import { transactionsWatcher } from './transactionsWatcher'

export default [
    ...newsWatcher,
    ...transactionsWatcher
]