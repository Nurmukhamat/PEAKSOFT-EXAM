import React, { useContext } from 'react'
import { CountContext } from '../App'

export const ComponentA = () => {
    const countContext = useContext(CountContext)
  return (
    <div>
      Компонент A 
      <button onClick={() => countContext.countDispatch('increment')}>increment</button>
      <button onClick={() =>  countContext.countDispatch('decrement')}>decrement</button>
    </div>
  )
}

