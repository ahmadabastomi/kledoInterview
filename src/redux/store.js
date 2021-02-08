import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import Saga from './saga'

const logger = createLogger({})
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(
        sagaMiddleware,
        logger,
    )
);
sagaMiddleware.run(Saga)

export default store