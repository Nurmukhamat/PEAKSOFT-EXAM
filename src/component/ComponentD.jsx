import React, { useContext } from 'react'
import { CountContext } from '../App'

export const ComponentD = () => {
    const countContext = useContext(CountContext)
  return (
    <div>
      Компонент D 
      <button onClick={() => countContext.countDispatch('increment')}>increment</button>
      <button onClick={() =>  countContext.countDispatch('decrement')}>decrement</button>
    </div>
  )
}
