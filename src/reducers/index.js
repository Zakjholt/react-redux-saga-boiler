import { handleActions } from 'redux-actions'
import initialState from './initialState'

const reducer = handleActions({
  'test/reducer'(state, action) {
    return {
      ...state,
      dispatchedAction: action
    }
  },
  'increment/sagas/counter'(state) {
    const { sagaCounter } = state
    return {
      ...state,
      sagaCounter: sagaCounter + 1
    }
  }
}, initialState)

export default reducer
