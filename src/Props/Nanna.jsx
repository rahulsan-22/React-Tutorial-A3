// import Koduku from './Koduku'

// let status = () =>"Here completes the story";
// const Nanna = () => {
//   return <>
//     <Koduku item="Gold Chain" price={200000} worthy={false} skills={["Sleep", "Eat", "Roam"]} education={{ degree: "B.E", result: "Fail" }} fun={status} />
//   </>
// }
// export default Nanna

//!Default Values and Prop Children
// import Koduku from './Koduku'
// const Nanna = () => {
//   return <Koduku item="Gold Chain">
//     <h1>I am Prop Children</h1>
//     <p>Tinnara????</p>
//   </Koduku>
// }

// export default Nanna

//!Prop Drilling
import Koduku from './Koduku'
const Nanna = () => {
  return <Koduku item="Gold Chain"/>
}

export default Nanna