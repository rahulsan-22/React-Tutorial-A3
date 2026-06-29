import { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <>
        <h1>Count : {this.state.count} </h1>
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>Increment</button>
        <button onClick={() => {
          this.setState({
            count: this.state.count - 1
          })
        }}>Decrement</button>
        <button onClick={() => {
          this.setState({
            count: 0
          })
        }}>Reset</button>
      </>
    )
  }
}
export default Counter