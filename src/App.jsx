//!15/06/2026

//!Components

//!Functional Components
//*Normal Function
// function App1() {
//   return <h1>Im Normal Functional Component 🥳</h1>
// }
// export default App1

//*Arrow Function
// let App2 = () => {
//   return <h1>Im Arrow Functional Component 🥱</h1>
// }
// export default App2

//!16/06/2026

//!Class Components
// import React from 'react'
// class App3 extends React.Component{
//   render() {
//     return <h1>Im Class Component</h1>
//   }
// }
// export default App3

//!Component Reusabality
// import Button from "./Components/Button"
// const App = () => {
//   return <div>
//     <Button />
//     <Button />
//     <Button />
//   </div>
// }
// export default App

//!17/06/2026
//!JSX ,Fragments ,Expression
// import JavascriptXML from './Jsx/JavascriptXML'
// const App = () => {
//   return <JavascriptXML/>
// }

// export default App

//!19/06/2026
//!Props
// import Nanna from './Props/Nanna'

// const App = () => {
//   return <Nanna/>
// }

// export default App

//!23/06/2026
//!Rendering Lists and Keys
// import List from './RenderingLists/List'

// const App = () => {
//   return <>
//     <List/>
//   </>
// }

// export default App

//!25/06/2026
//!Conditional Rendering
// import React from 'react'
// import ConditionalRendering from './ConditionalRendering/ConditionalRendering'

// const App = () => {
//   return <ConditionalRendering/>
// }

// export default App

//!26/06/2026
//!Events
// import Events from './Events/Events'

// const App = () => {
//   return <Events/>
// }

// export default App

//!29/06/2026
//!State
// import Counter from './State/Counter'
// import Theme from './State/Theme'
// import User from './State/User'

// const App = () => {
//   return <>
//     <Counter />
//     <User />
//     <Theme/>
//   </>
// }

// export default App

//!30/06/2026
//!Lifecycle Methods
import ErrorBoundary from './LifecycleMethods/ErrorBoundary'
import Lifecycle from './LifecycleMethods/Lifecycle'
import Welcome from './LifecycleMethods/Welcome'

const App = () => {
  return <>
    <Lifecycle/>
    <ErrorBoundary>
      <Welcome name="Pavan" />
    </ErrorBoundary>
    <ErrorBoundary>
      <Welcome name="Monty" />
    </ErrorBoundary>
    <ErrorBoundary>
      <Welcome name="Yasin" />
    </ErrorBoundary>
  </>
}

export default App