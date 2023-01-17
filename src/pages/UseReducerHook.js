import {useReducer} from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}


function reducer(state, action){
  switch(action.type){
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1}
    case ACTIONS.DECREMENT:
        return { ...state, count: state.count - 1}
    default:
      return state
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer((reducer), {count: 0, theme: 'blue'})

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT})
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT})
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <span>{state.theme}</span>
    </div>
  );
}

export default UseReducerHook;
