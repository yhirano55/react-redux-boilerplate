import * as React from "react"
import { connect } from "react-redux"
import { State as RootState } from "../../../reducers"
import { counterActions } from "../../../actions"
import Counter from "./Counter"

type OuterProps = {}

type Props = {
  value: number
}

// connect
const mapStateToProps = (state: RootState, props: OuterProps): Props => {
  return {
    value: state.counter.value
  }
}

const enhancer = connect(
  mapStateToProps,
  {
    add: counterActions.add,
    increment: counterActions.increment
  }
)

export default enhancer(Counter)
