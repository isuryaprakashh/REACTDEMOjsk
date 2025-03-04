import {useState} from 'react'

export default function Demo3() 
{
     const [name,setName] = useState("") // string

     //e means event
     //e.target means specific target field
     //e.target.value means the value type or selected
     const handleChange = (e) => {
        //console.log(e.target.value)
        setName(e.target.value)   

     }
    return (
    <div>
        <h3><u>React Hooks Demo 3</u></h3>
        Enter Name <input type="text" id="name" onChange={handleChange}/><br/>
        Name:{name}
    </div>
  )
}
