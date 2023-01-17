import {useState, useRef, useEffect} from 'react'

function UseRefHook() {
  const [name, setName] = useState('')
  const prevName = useRef('')
  const renderCount = useRef(1)
  const inputRef = useRef();

  function focus(){
    console.log(inputRef.current)
    inputRef.current.focus();
  }

  useEffect(() => {
    prevName.current = name
  }, [name])

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })

  return (
    <>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default UseRefHook;
