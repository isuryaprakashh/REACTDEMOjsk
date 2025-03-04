import React from 'react'

export default function PropsFunction(props) 
{
  return (
    <div>
        <h3><u>PropsFunction</u></h3>
        <p>{props.name}</p>
        <p>{props.p}</p>
        <p>{props.q}</p>
        <p>{props.student.sid}</p>
        <p>{props.student.sname}</p>
        <p>{props.student.sgender}</p>
        <p>{props.id}</p>
        <p>{props.p+props.q}</p>
        
    </div>
  )
}
