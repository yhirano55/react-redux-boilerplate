import { counterConstants } from "../constants"

type Add = {
  type: typeof counterConstants.ADD
  payload: {
    amount: number
  }
}

function add(amount: number): Add {
  return {
    type: counterConstants.ADD,
    payload: {
      amount
    }
  }
}

type Increment = {
  type: typeof counterConstants.INCREMENT
}

function increment(): Increment {
  return {
    type: counterConstants.INCREMENT
  }
}

export const counterActions = {
  add,
  increment
}
