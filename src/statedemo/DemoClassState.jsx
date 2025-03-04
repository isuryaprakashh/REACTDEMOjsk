import React, { Component } from 'react'

export default class 
 extends Component {

    constructor()
    {
        super();
        this.state={id:929,name:"SURYA",gender:"MALE"}
        
    }

    //setState() is used to modify the state object
    change = () => {
       this.setState({id:4654,name:"PEACE",gender:"OTHERS"})
    }



  render() {
    return (
      <div>
        <h3><u>State Demo in Class Component</u></h3>
        <p>ID:{this.state.id}</p>
        <p>Name:{this.state.name}</p>
        <p>Gender:{this.state.gender}</p>

<button onClick={this.change} >Change</button>        
      </div>
    )
  }
}
