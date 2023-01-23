import { useState, useEffect } from 'react';

export default function Counter() {
const [count, setCount] = useState(55);
const [minutn, setMinut] =useState(0);

useEffect(() => {
  function onTick() {
    setCount(c => c + 1);
  }
  setInterval(onTick, 1000);
}, []);

return <h1>{minutn}:{count}</h1>;
}