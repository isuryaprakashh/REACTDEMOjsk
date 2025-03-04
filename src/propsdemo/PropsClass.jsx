import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div>
        <h3><u>PropsClass</u></h3>
        <p>{this.props.name}</p>
        <p>{this.props.p}</p>
        <p>{this.props.q}</p>
        <p>{this.props.student.sid}</p>
        <p>{this.props.student.sname}</p>
        <p>{this.props.student.sgender}</p>
        <p>{this.props.id}</p>
        <p>{this.props.p+this.props.q}</p>
      </div>
    )
  }
}
