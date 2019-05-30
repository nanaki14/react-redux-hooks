import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import counter , {State as coiunterState} from './modules//counter'

export type RootState = {
  counter: coiunterState
}

const configureStore = () => {
  const win = window as any

  /* redux-dev-tools */
  const dev =
    process.env.NODE_ENV !== 'production' ||
    (typeof window === 'object' && window.location.search === '?dev')

  const composeEnhancers =
    typeof win === 'object' && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  // with middleware
  const enhancer = dev
    ? composeEnhancers()
    : applyMiddleware()

  const reducers = combineReducers({
    counter
  })

  const store = createStore(reducers, enhancer)


  return store
}

export default configureStore
