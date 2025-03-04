import {useState} from 'react'

export default function Demo2() 
{
const [flag,setFlag] = useState(false)  // boolean
    
    const change = () => {
        setFlag(!flag)
    }

  return (
    <div>
        <h3><u>React Hooks Demo 2</u></h3>
        {
            flag?
            <p>K L University</p>:
            <p>K L E F</p>
        }
        <button onClick={change}>Change</button>
    </div>
  )
}
