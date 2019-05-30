import React, { useCallback } from 'react'
import { useStore, useSelector, useDispatch } from 'react-redux'
import dispatcher from '../store/modules/counter/dispatcher'
import console = require('console');


const Counter = () => {
  const counter = useSelector(state => state.counter)
  console.log(counter)

  const store = useStore()

  console.log(store)

  const dispatch = useDispatch()
  const {asyncIncrement} = dispatcher(dispatch)

  const handleClick = useCallback(() => {
    asyncIncrement(counter.count)
  }, [counter.count])

  return (
    <button type="button" onClick={handleClick}>
      {counter.count}: button
    </button>
  )
}

export default Counter
