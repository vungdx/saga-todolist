import rootReducer from "../RootReducer/index";
import rootSaga from '../Sagas';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
export default store;