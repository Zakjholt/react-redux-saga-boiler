import { takeEvery, put, select } from 'redux-saga/effects'
import { ReducerActions } from '../actions'

function* testSaga() {
  yield put(ReducerActions.test('dispatched action'))
  yield put({ type: 'increment/sagas/counter' })
}

function* stateLogger(action) {
  const state = yield select()
  console.log('action', action)
  console.log('state after', state)

}

function* rootSaga() {
  yield takeEvery('test/saga', testSaga)
  yield takeEvery('*', stateLogger)
}

export default rootSaga
