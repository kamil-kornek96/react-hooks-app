import {useEffect,useState} from 'react';

function UseEffectHook() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    console.log('onMount')
    window.addEventListener('resize', handleResize)

    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <p>{windowWidth}</p>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default UseEffectHook;
