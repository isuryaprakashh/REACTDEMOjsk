import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import Home from './Home'
import DemoClass from './DemoClass'
import DemoFunction from './DemoFunction'
import PropsFunction from '../propsdemo/PropsFunction'
import PropsClass from '../propsdemo/PropsClass'
import DemoClassState from '../statedemo/DemoClassState'
import Demo1 from '../hooksdemo/Demo1'
import Demo2 from '../hooksdemo/Demo2'
import Demo3 from '../hooksdemo/Demo3'
import Demo4 from '../hooksdemo/Demo4'
import Demo5 from '../hooksdemo/Demo5'
import NotFound from './NotFound'
import './style.css'

export default function Navbar() 
{
    const name = "KLEF"
  const p=100,q=100
  const Student = {sid:1,sname:"Surya",sgender:"MALE"}

  return (
    <div>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/democlass">Demo 1</Link>
            <Link to="/demofunction">Demo 2</Link>
            <Link to="/propsfunction">Demo 3</Link>
            <Link to="/propsclass">Demo 4</Link>
            <Link to="/democlassstate">Demo 5</Link>
            <Link to="/hooksdemo1">Demo 6</Link>
            <Link to="/hooksdemo2">Demo 7</Link>
            <Link to="/hooksdemo3">Demo 8</Link>
            <Link to="/hooksdemo4">Demo 9</Link>
            <Link to="/hooksdemo5">Demo 10</Link>
        </div>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/democlass" Component={DemoClass}/>
            <Route path="/demofunction" Component={DemoFunction}/>
            <Route path="/propsfunction" element={<PropsFunction name={name} p={p} q={q} student={Student} id={30929}/>}/>
            <Route path="/propsclass" element={<PropsClass name={name} p={p} q={q} student={Student} id={30929}/>}/>
            <Route path="/democlassstate" Component={DemoClassState}/>
            <Route path="/hooksdemo1" Component={Demo1}/>
            <Route path="/hooksdemo2" Component={Demo2}/>
            <Route path="/hooksdemo3" Component={Demo3}/>
            <Route path="/hooksdemo4" Component={Demo4}/>
            <Route path="/hooksdemo5" Component={Demo5}/>
            <Route path="*" Component={NotFound}/>

        </Routes>

    </div>
  )
}
