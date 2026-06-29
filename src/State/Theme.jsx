import { Component } from 'react'

class Theme extends Component {
  constructor() {
    super()
    this.state = {
      isLightTheme:true
    }
  }
  handleTheme = () => {
    this.setState({
      isLightTheme : !(this.state.isLightTheme)
    })
  }
  render() {
    return (
      <div>
        <h1>Theme: {this.state.isLightTheme ? "Light" : "Dark"}</h1>
        <button onClick={this.handleTheme}>
          {this.state.isLightTheme ? "Switch to Dark Theme" : "Switch to Light Theme"}
        </button>
      </div>
    )
  }
}

export default Theme