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
// const Events = () => {
//   let handleEventObject = (e) => {
//     console.log(e)
//     console.log(e.target)
//     console.log(e.type)
//   }
//   return (
//     <div>
//       <button onClick={handleEventObject}>Generate Event Object</button>
//     </div>
//   )
// }
// export default Events

//!FOCUS ,CHANGE AND BLUR
// const Events = () => {
//   let handleFocus = (e) => {
//     e.target.style.background = "red"
//   }
//   let handleBlur = (e) => {
//     e.target.style.background = "green"
//   }
//   let handleChange = (e) => {
//     console.log(e.target.value)
//   }
//   return (
//     <div>
//       <input type="text" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}/>
//     </div>
//   )
// }
// export default Events

//!SUBMIT
// const Events = () => {
//   let handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form Submitted 🥳")
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" placeholder='Enter your email' />
//       <br /><br />
//       <input type="password" placeholder='Enter your password'/>
//       <br /><br />
//       <input type="submit" value="Log In"/>
//     </form>
//   )
// }

// export default Events

//!MOUSEENTER , MOUSEMOVE , MOUSELEAVE
const Events = () => {
  let handleMouseEnter = (e) => {
    e.target.style.background = "black"
    e.target.style.color = "white"
  }
  let handleMouseMove = (e) => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    e.target.style.background = `rgb(${red},${green},${blue})`
  }
  let handleMouseLeave = (e) => { 
    e.target.style.background = "green"
    e.target.style.color = "yellow"
  }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>Events</div>
  )
}
export default Events