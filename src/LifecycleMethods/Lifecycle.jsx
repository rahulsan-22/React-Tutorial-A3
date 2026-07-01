import { Component } from 'react'
import Unmount from './Unmount'

class Lifecycle extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    console.log("Constructor Method Running....")
  }
  componentDidMount() {
    console.log("Component Did Mount Method Running....")
  }
  componentDidUpdate() {
    console.log("Component Did Update Method Running....")
  }
  render() {
    console.log("Render Method Running....")
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
        <br /><br />
        {this.state.count <=5 && <Unmount/>}
      </div>
    )
  }
}
export default Lifecycle