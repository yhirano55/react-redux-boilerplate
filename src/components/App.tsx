import * as React from "react"
import { Provider } from "react-redux"
import store from "../helpers/store"
import Counter from "./organisms/counter"

export default () => (
  <Provider store={store()}>
    <Counter />
  </Provider>
)
