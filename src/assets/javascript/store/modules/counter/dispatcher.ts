import Api from '../../../api'
import * as actions from './actions'

const dispatcher = (dispatch) => {
  const execDispatch = dispatch

  const asyncIncrement = async (num: number) => {
    const response = await Api.counter(num)

    execDispatch(actions.increment(response))
  }

  return {
    asyncIncrement
  }
}

export default dispatcher
