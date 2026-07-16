import { useState } from "react"
const Inline = () => {
  let [darkMode,setDarkMode] = useState(true)
  let stylesForPara = {
    color: "yellow",
    backgroundColor: "green",
    padding: "2rem"
  }
  let darkModeStyles = {
    color: "white",
    backgroundColor:"black"
  }
  let lightModeStyles = {
    color: "black",
    backgroundColor:"white"
  }
  let handleClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <h1 style={{ color: "white", backgroundColor: "red", textAlign: "center" }}>Tinnara?</h1>
      <p style={stylesForPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maxime cum cupiditate ut, odio animi laborum fugiat nemo modi. Error ullam accusantium dolore, praesentium dolorem illum ducimus ipsa unde corporis?</p>
      <button onClick={handleClick} style={darkMode ? darkModeStyles : lightModeStyles}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  )
}

export default Inline