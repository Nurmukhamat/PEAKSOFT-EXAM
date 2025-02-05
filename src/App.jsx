import { createContext, useReducer } from "react"
import "./App.css"
import { ComponentA } from "./component/ComponentA"
import { ComponentB } from "./component/ComponentB"
import { ComponentC } from "./component/ComponentC"

export const CountContext = createContext()

const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
      case 'decrement':
        return state -1
  }
}
const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
    <div>
      Счёт : {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </CountContext.Provider>
  )
}

export default App
