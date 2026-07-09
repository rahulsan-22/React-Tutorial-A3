//!Example 1: Focusing upon input field
// import  { useRef } from 'react'
// const Reference = () => {
//   let inputRef = useRef(null)
//   let handleFocus = () => {
//     inputRef.current.focus()
//   }
//   return <>
//     <input type="text" ref={inputRef} />
//     <button onClick={handleFocus}>Click to Focus</button>
//   </>
// }
// export default Reference

//!Example 2 : Changing the value of input field
// import { useRef } from 'react'
// const Reference = () => {
//   let inputRef = useRef(null)
//   console.log(inputRef)
//   let handleValue = () => {
//     inputRef.current.value = "Rahul"
//   }
//   return <>
//     <input type="text" ref={inputRef} />
//     <button onClick={handleValue}>Change value</button>
//   </>
// }
// export default Reference

//!Example 3 : Storing mutable values
import { useRef } from 'react'

const Reference = () => {
  let count = useRef(0)
  console.log(count)
  let handleCount = () => {
    count.current++
    console.log(count.current)
  }
  return <>
    <h1>Count : {count.current}</h1>
    <button onClick={handleCount}>Increment Count</button>
  </>
}

export default Reference