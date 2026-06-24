// const Koduku = ({ item, price, worthy, skills, education: { degree, result },fun}) => {
//   return (
//     <div>
//       <h1>Koduku received {item} from his Nanna which is worth of ₹{price}</h1>
//       <p>Is he worth of {item}: {worthy ? "true" : "false"}</p>
//       <h2>Things son will do:</h2>
//       <ul>
//         {
//           skills.map((ele) => {
//             return <li>{ele}</li>
//           })
//         }
//       </ul>
//       <h2>Education:</h2>
//       <p>Degree:{degree}</p>
//       <p>Result:{result}</p>
//       <p>{fun()}</p>
//     </div>
//   )
// }
// export default Koduku

//!Default Values and Prop Children
// import React from 'react'
// const Koduku = ({ item = "Money", worth = "1000000", children }) => {
//   return (
//     <>
//       <div>Koduku received {item} from his Nanna which is of ₹{worth}</div>
//       {children}
//     </>
//   )
// }

// export default Koduku

//!Prop Drilling
import Manavadu from './Manavadu'
const Koduku = ({item}) => {
  return <Manavadu data={item} />
}

export default Koduku