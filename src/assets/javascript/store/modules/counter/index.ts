import { Reducer } from 'redux'
import { ActionType } from 'redux-actions-type'
import * as constants from './constants'
import * as actions from './actions'

export type Action = ActionType<typeof actions>

export type State = {
  count: number
}

export const initialState: State = {
  count: 1
}

const reducer: Reducer<State, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case constants.INCREMENT:
      return { count: state.count + action.payload }
    case constants.DECREMENT:
      return { count: state.count - action.payload }
    default:
      return state
  }
}

export default reducer
