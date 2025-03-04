import {useState} from 'react'

export default function Demo1() {
  const [count,setCount] = useState(0) //Number
  //count is user defined state object
  //setCount is a method to modify the count value
  //initial value is zero

  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }
  return (
    <div>
      <h3><u>Counter App Demo using React Hooks</u></h3>
      <p>Count={count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
    
  )
}
