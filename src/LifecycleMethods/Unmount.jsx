import { Component } from 'react'

class Unmount extends Component {
  componentWillUnmount() {
    console.log("Component Unmounted....")
  }
  render() {
    return (
      <div>Unmount</div>
    )
  }
}
export default Unmount