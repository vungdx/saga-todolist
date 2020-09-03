import { all } from 'redux-saga/effects'
import { watchSagaHandleTodos } from '../../views/Todo/saga'


function* rootSaga() {
    yield all([
        watchSagaHandleTodos()
    ])
}
export default rootSaga;