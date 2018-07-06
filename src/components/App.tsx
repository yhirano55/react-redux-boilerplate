import * as React from "react"
import { Provider } from "react-redux"
import createStore from "../store/createStore"
import Counter from "./organisms/counter"

export default () => (
  <Provider store={createStore()}>
    <Counter />
  </Provider>
)
