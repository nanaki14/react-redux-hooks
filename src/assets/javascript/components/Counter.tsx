import React, { useCallback } from 'react'
import { useStore, useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import dispatcher from '../store/modules/counter/dispatcher'


const Counter = () => {
  const counter: RootState['counter'] = useSelector((state: RootState) => state.counter)
  console.log(counter)

  const store = useStore()

  console.log(store)

  const dispatch = useDispatch()
  const {asyncIncrement} = dispatcher(dispatch)

  const handleClick = useCallback(async () => {
    await asyncIncrement(counter.count)
  }, [counter.count])

  return (
    <button type="button" onClick={handleClick}>
      {counter.count}: button
    </button>
  )
}

export default Counter
