import {useState} from 'react';

//Use hooks only inside function components!

function UseStateHook() {
  const [state, setState] = useState({ count: 0, theme: 'blue'});
  const count = state.count
  const theme = state.theme
  //Należy korzystać z prev i strzałki,
  //jeśli będziemy korzystać bezpośrednio z count,
  //to w przypadku gdy będziemy chcieli wykonać
  //kilka obliczeń to kolejne obliczenia nie będą
  //"widzieć" zmian które zaszły kilka linijek wyżej
  //przed ponownym wyrenderowaniem komponentu!
  function decrementCount(){
    setState(prevState => {
      return { ...prevState, count: prevState.count - 1}
    });
  }

  function incrementCount(){
    setState(prevState => {
      return { ...prevState, count: prevState.count + 1}
    });
  }

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default UseStateHook;
