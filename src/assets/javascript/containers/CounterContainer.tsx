import { connect } from 'react-redux'
import dispatcher from '../store/modules/counter/dispatcher'
import { RootState } from '../store'
import Counter from '../components/Counter'

const mapStateToProps = (state: RootState) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  const {asyncIncrement} = dispatcher(dispatch)

  return {
    increment: async (num: number) => await asyncIncrement(num)
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer
