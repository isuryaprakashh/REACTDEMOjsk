import {useState} from 'react'

export default function Demo5() 
{
    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [sum,setSum]   = useState(0)

    const handleChange1 = (e) => { 
        setNum1(e.target.value)
    }
    const handleChange2 = (e) => {
        setNum2(e.target.value)
    }
    const add = () => {
        setSum(parseInt(num1)+parseInt(num2))
    }
  return (
    <div>
        <h3><u>Calculator App using React Hooks</u></h3>
        Enter First Number <input type="number" onChange={handleChange1}/><br/>
        Enter Second Number <input type="number" onChange={handleChange2}/><br/>
        <button onClick={add}>Add</button><br/>
        Sum = {sum}
    </div>
  )
}
