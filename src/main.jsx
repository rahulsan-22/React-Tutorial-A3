import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App'
import App2 from './App'
import App3 from './App'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById("root")).render(<App1/>)
// ReactDOM.createRoot(document.getElementById("root")).render(<App2/>)
// ReactDOM.createRoot(document.getElementById("root")).render(<App3/>)
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)