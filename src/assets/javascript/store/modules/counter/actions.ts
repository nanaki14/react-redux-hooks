import * as constants from './constants'

// =================================
// action creator
export const increment = (payload: number) =>
  ({
    type: constants.INCREMENT,
    payload
  } as const)

export const decrement = (payload: number) =>
  ({
    type: constants.DECREMENT,
    payload
  } as const)
