import reducer, { initialState, Action } from '../index'
import * as actions from '../actions'

const testReducer = (action: Action) => reducer(initialState, action)

// =============================================
// INCREMENT

describe('INCREMENT', () => {
  const value = 1
  // Action
  test('Action', () => {
    const action = actions.increment(value)
    expect(action.payload).toBe(value)
  })

  // Reducer
  test('Reducer', () => {
    const state = testReducer(actions.increment(value))
    expect(state.count).toBe(1)
  })
})

// =============================================
// DECREMENT

describe('DECREMENT', () => {
  const value = 1
  // Action
  test('Action', () => {
    const action = actions.decrement(value)
    expect(action.payload).toBe(value)
  })

  // Reducer
  test('Reducer', () => {
    const state = testReducer(actions.decrement(value))
    expect(state.count).toBe(-1)
  })
})
