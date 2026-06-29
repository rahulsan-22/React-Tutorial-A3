import { Component } from 'react'

class User extends Component {
  constructor() {
    super()
    this.state = {
      name: "Pavan",
      age: 26
    }
  }
  handleInfo = () => {
    this.setState({
      name: "Monty",
      age: 28
    })
  }
  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Age: {this.state.age}</h1>
        <button onClick={this.handleInfo}>Change Info</button>
      </div>
    )
  }
}
export default User