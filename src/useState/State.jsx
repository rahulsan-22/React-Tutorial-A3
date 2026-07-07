//!Example 1 : Number State
// import { useState } from 'react'
// const State = () => {
//   let [count, setCount] = useState(0)
//   let handleIncrement = () => {
//     setCount(count + 1)
//   }
//   let handleDecrement = () => {
//     setCount(count - 1)
//   }
//   let handleReset = () => {
//     setCount(0)
//   }
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }
// export default State

//!Example 2: String State
// import { useState } from 'react'
// const State = () => {
//   let [food, setFood] = useState("")
//   let handleChickenBiryani = () => {
//     setFood("Chicken Biryani 🐔")
//   }
//   let handleMuttonBiryani = () => {
//     setFood("Mutton Biryani 🐐")
//   }
//   let handleVegBiryani = () => {
//     setFood("Veg Biryani 🥔")
//   }
//   return (
//     <div>
//       <h1>I ate : {food}</h1>
//       <button onClick={handleChickenBiryani}>Chicken Biryani</button>
//       <button onClick={handleMuttonBiryani}>Mutton Biryani</button>
//       <button onClick={handleVegBiryani}>Veg Biryani</button>
//     </div>
//   )
// }
// export default State

//!Example 3 : Boolean State
// import { useState } from 'react'
// const State = () => {
//   let [theme, setTheme] = useState(true)
//   let handleTheme = () => {
//     setTheme(!theme)
//   }
//   return (
//     <div>
//       <h1>Theme : {theme ? "Light" : "Dark"}</h1>
//       <button onClick={handleTheme}>
//         {theme ? "Switch to Dark Mode" : "Switch to Light Mode"}
//       </button>
//     </div>
//   )
// }
// export default State

//! Example 4 : Array State
// import { useState } from 'react'
// const State = () => {
//   let [subjects, setSubjects] = useState(["Html", "Css", "Js"])
//   let [count,setCount] = useState(0)
//   let handleSubject = () => {
//     if (count == 0) {
//       setSubjects([...subjects, "React"])
//       setCount(count+1)
//     }
//   }
//   return (
//     <div>
//       <h1>Frontend Subjects 😎</h1>
//       <ol>
//         {
//           subjects.map((item, index) => {
//             return <li key={index}>{item}</li>
//           })
//         }
//       </ol>
//       <button onClick={handleSubject}>Add React</button>
//     </div>
//   )
// }
// export default State

//!Example 5 : Object State
import { useState } from 'react'
const State = () => {
  let [details,setDetails] = useState({
    name: "Monty",
    age: 25
  })
  let { name, age } = details
  let handleAge = () => {
    setDetails({...details,age:28})
  }
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>I am {age} years old</p>
      <button onClick={handleAge}>Update Age</button>
    </div>
  )
}
export default State

//!Funtional Updates
import React, { useState } from 'react'

const State = () => {
  let [count, setCount] = useState(0)
  let handleIncrement = () => {
    setCount((prevCount) => {
      console.log(prevCount)
      return prevCount + 1
    });
  }
  let handleDecrement = () => {
    setCount((prevCount) => {
      console.log(prevCount)
      return prevCount - 1
    });
  }
  let handleReset = () => {
    setCount(0);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
export default State