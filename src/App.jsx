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
// import ErrorBoundary from './LifecycleMethods/ErrorBoundary'
// import Lifecycle from './LifecycleMethods/Lifecycle'
// import Welcome from './LifecycleMethods/Welcome'

// const App = () => {
//   return <>
//     <Lifecycle/>
//     <ErrorBoundary>
//       <Welcome name="Pavan" />
//     </ErrorBoundary>
//     <ErrorBoundary>
//       <Welcome name="Monty" />
//     </ErrorBoundary>
//     <ErrorBoundary>
//       <Welcome name="Yasin" />
//     </ErrorBoundary>
//   </>
// }

// export default App

//!02/07/2026
//!useState()
// import State from './useState/State'

// const App = () => {
//   return <State/>
// }

// export default App

//!07/07/2026
//!useEffect()
// import Effect from './useEffect/Effect'

// const App = () => {
//   return <Effect/>
// }

// export default App

//!08/07/2026
//!useContext()
// import Dilsukhnagar from './useContext/Dilsukhnagar'
// import { AlertContext, CafeContext, ChipsContext, IcecreamContext } from './useContext/Zepto'

// const App = () => {
//   let snacks = { item1: "Burger", item2: "Fries", item3: "Coffee" }
//   let warning = ()=> alert("useContext Completed 🥳")
//   return <>
//     <IcecreamContext.Provider value="Cup Ice">
//       <ChipsContext.Provider value="Lays">
//         <CafeContext.Provider value={snacks}>
//           <AlertContext.Provider value={warning}>
//             <Dilsukhnagar />
//           </AlertContext.Provider>
//         </CafeContext.Provider>
//       </ChipsContext.Provider>
//     </IcecreamContext.Provider>
//   </>
// }
// export default App

//!09/07/2026
//!useRef()
// import React from 'react'
// import Reference from './useRef/Reference'

// const App = () => {
//   return <Reference/>
// }

// export default App

//!10/07/2026
//!useMemo()
// import React from 'react'
// import MemoComponent from './useMemo/MemoComponent'

// const App = () => {
//   return <MemoComponent/>
// }

// export default App

//!14/07/2026
//!useCallback()
// import React, { useCallback, useState } from 'react'
// import Title from './useCallback/Title'
// import Count from './useCallback/Count'
// import Button from './useCallback/Button'

// const App = () => {
//   let [age, setAge] = useState(25)
//   let [salary, setSalary] = useState(10000)
//   let handleAge = useCallback(() => {
//     setAge(age + 1)
//   }, [age])
//   let handleSalary = useCallback(() => {
//     setSalary(salary + 10000)
//   }, [salary])
//   return (
//     <div>
//       <Title />
//       <Count text="Age" count={age} />
//       <Button fun={handleAge}>Increment Age</Button>
//       <Count text="Salary" count={salary} />
//       <Button fun={handleSalary}>Increment Salary</Button>
//     </div>
//   )
// }

// export default App

//!15/07/2026
//!Adding Styles
import Global from './AddingStyles/Global'
import Header from './AddingStyles/Header'
import Inline from './AddingStyles/Inline'
import Navbar from './AddingStyles/Navbar'
// import "./index.css"
const App = () => {
  return <>
    {/* <Inline /> */}
    {/* <Global /> */}
    {/* <Header/> */}
    <Navbar/>
  </>
}

export default App