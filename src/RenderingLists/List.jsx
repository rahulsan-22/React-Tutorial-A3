//!Example 1: (Array of Strings)
// import React from 'react'
// const List = () => {
//   let vehicles = ["Bike", "Auto", "Metro", "Bus"]
//   return (
//     <div>
//       <h1>List of Vehicles 😁</h1>
//       <ol>
//         {
//           vehicles.map((item,index) => {
//             return <li key={index}>{item}</li>
//           })
//         }
//       </ol>
//     </div>
//   )
// }
// export default List

//!Example 2 : (Array of numbers)
// import React from 'react'
// const List = () => {
//   let famousJerseyNumbers = [1,10,18,45,7,1]
//   return (
//     <div>
//       <h1>Famous Jersey Numbers</h1>
//       <ul>
//         {
//           famousJerseyNumbers.map((num,index) => {
//             return <li key={index}>{num}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }
// export default List

//!Example 3: (Array of Objects)
// import React from 'react'
// const List = () => {
//   let restaurants = [
//     {
//       id: 1,
//       name: "Mehfil",
//       loc: "Dilsukhnagar"
//     },
//     {
//       id: 2,
//       name: "Shah Ghouse",
//       loc: "LB Nagar"
//     },
//     {
//       id: 3,
//       name: "Paradise",
//       loc: "Secunderabad"
//     }
//   ]
//   return (
//     <div>
//       <h1>List of Restaurants and their location 😎</h1>
//       <hr />
//       {
//         restaurants.map((item) => {
//           return <React.Fragment key={item.id}>
//             <div>
//             <h1>Id : {item.id}</h1>
//             <h1>Name : {item.name}</h1>
//             <h1>Place : {item.loc}</h1>
//           </div>
//           <hr />
//           </React.Fragment>
//         })
//       }
//     </div>
//   )
// }
// export default List

//!Example 4: (Array of Objects)
// import React from 'react'
// let movies = [
//   { id: 1, name: "Salaar", hero: "Prabhas", herione: "Shruthi Hasan" },
//   { id: 2, name: "Mirchi", hero: "Prabhas", herione: "Anushka Shetty" },
//   { id: 3, name: "OG", hero: "Pawan Kalyan", herione: "Priyanka Mohan" }
// ]
// const List = () => {
//   return (
//     <div>
//       <h1>List of movies and their cast</h1>
//       <hr />
//       {
//         movies.map((item) => {
//           return <section key={item.id}>
//             <div>
//               <h1>Id : {item.id}</h1>
//               <h1>Movie Name : {item.name}</h1>
//               <h1>Hero:{item.hero}</h1>
//               <h1>Herione:{item.herione}</h1>
//             </div>
//             <hr />
//           </section>
//         })
//       }
//     </div>
//   )
// }
// export default List


//!Example 5 : (Rendering Component)
import React from 'react'
import SportsInfo from './SportsInfo'
let sports = [
  { id: 1, name: "Cricket", players: 11 },
  { id: 2, name: "Badminton", players: 4 },
  { id: 3, name: "Kabaddi", players: 7 }
]
const List = () => {
  return <>
    {
      sports.map((item) => {
        return <SportsInfo data={item} key={item.id}/>
     })
    }
  </>
}
export default List