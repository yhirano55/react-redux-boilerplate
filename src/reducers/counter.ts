import { counterConstants } from "../constants"

export type State = {
  value: number
}

const initialState: State = {
  value: 0
}

export default (state: State = initialState, action: any) => {
  switch (action.type) {
    case counterConstants.ADD: {
      return {
        ...state,
        value: state.value + action.payload.amount
      }
    }
    case counterConstants.INCREMENT: {
      return {
        ...state,
        value: state.value + 1
      }
    }
    default: {
      return state
    }
  }
}
