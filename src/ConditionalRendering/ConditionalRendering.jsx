//! 1) Ternary Operator

//*Example 1:
// const ConditionalRendering = () => {
//   let isAdmin = false;
//   return <>
//     {
//       isAdmin ? <h1>Welcome Admin 😎</h1> : <h1>Welcome User 😁</h1>
//     }
//   </>
// }
// export default ConditionalRendering

//*Example 2:
// import Hungry from "./Hungry"
// import Sleep from "./Sleep"
// const ConditionalRendering = () => {
//   let feelingHungry = false
//   return <>
//     {
//      feelingHungry ? <Hungry/> : <Sleep/>
//     }
//   </>
// }
// export default ConditionalRendering

//*Example 3 :
// const ConditionalRendering = () => {
//   let age = 15
//   return (
//     <div>
//       {
//         age>=18 ? <h1>Eligible to vote 🥳</h1> : <h1>Concentrate on your studies 🥺</h1>
//       }
//     </div>
//   )
// }
// export default ConditionalRendering

//! 2) Logical AND (&&)

//*Example 1 :
// const ConditionalRendering = () => {
//   let isAdmin = false
//   return (
//     <div>
//       {isAdmin && <h1>Welcome Admin 🙏</h1>}
//     </div>
//   )
// }
// export default ConditionalRendering

//*Example 2:
// import Sleep from './Sleep';
// const ConditionalRendering = () => {
//   let feelingSleepy = true;
//   return (
//     <div>
//       {
//         feelingSleepy && <Sleep/>
//       }
//     </div>
//   )
// }
// export default ConditionalRendering

//! 3) if-else Statement

//*Example 1 :
// const ConditionalRendering = () => {
//   let amount = 150;
//   if (amount >= 200) {
//     return <h1>Have Chicken Biryani 🐔</h1>
//   } else {
//     return <h1>Eat in PG 🥺</h1>
//   }
// }
// export default ConditionalRendering

//*Example 2 :
// const ConditionalRendering = () => {
//   let marks = 10;
//   if (marks >= 90) {
//     return <h1>Grade A</h1>
//   } else if (marks >= 60) {
//     return <h1>Grade B</h1>
//   } else {
//     return <h1>Grade C</h1>
//   }
// }
// export default ConditionalRendering

//! 4) Element Variables

//*Example :
const ConditionalRendering = () => {
  let headache = false
  let result;
  if (headache) {
    result = <h1>Have Coffee</h1>
  } else {
    result = <h1>Have Tea</h1>
  }
  return result
}
export default ConditionalRendering

//!Real Time Example :
const ConditionalRendering = () => {
  let darkMode = false
  return (
    <div>
      <button>{darkMode ? "Dark Mode" : "Light Mode"}</button>
    </div>
  )
}
export default ConditionalRendering