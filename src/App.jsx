// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import DemoClass from './components/DemoClass'
import DemoFunction from './components/DemoFunction'
import PropsClass from './propsdemo/PropsClass'
import PropsFunction from './propsdemo/PropsFunction'
import DemoClassState from './statedemo/DemoClassState'
import Demo1 from './hooksdemo/Demo1'
import Demo2 from './hooksdemo/Demo2'
import Demo3 from './hooksdemo/Demo3'
import Demo4 from './hooksdemo/Demo4'
import Demo5 from './hooksdemo/Demo5'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  // const name = "KLEF"
  // const p=100,q=100
  // const Student = {sid:1,sname:"Surya",sgender:"MALE"}
  return (
          <div>
            {/* <DemoFunction />
            <DemoClass/> */}
        


         {/* properties are name, p, q, student and id */}
    {/* <PropsFunction name={name} p={p} q={q} student={Student} id={30929}/>
    <PropsClass name={name} p={p} q={q} student={Student} id={30929}/>
         
         
      <DemoClassState/>

      <Demo1/>
      <Demo2/>
      <Demo3/>
      <Demo4/>
      <Demo5/> */}
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
          </div>
  )
}

export default App
