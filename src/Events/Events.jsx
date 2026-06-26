//!CLICK

//*Example 1:
// const Events = () => {
//   let handleTime = () => {
//     alert(new Date().toLocaleTimeString())
//   }
//   return (
//     <div>
//       <button onClick={handleTime}>Generate Time</button>
//     </div>
//   )
// }

// export default Events

//*Example 2:
// const Events = () => {
//   return (
//     <div>
//       <button onClick={()=>console.log(Math.random())}>Generate Random Number</button>
//     </div>
//   )
// }

// export default Events

//*Example 3:
// const Events = () => {
//   let handleUser = (name) => {
//     console.log(`Good Afternoon,${name}`)
//   }
//   return (
//     <div>
//       <button onClick={()=>handleUser("Yasin")}>Greet User</button>
//     </div>
//   )
// }

// export default Events

//!Event Object
const Events = () => {
  let handleEventObject = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.type)
  }
  return (
    <div>
      <button onClick={handleEventObject}>Generate Event Object</button>
    </div>
  )
}
export default Events