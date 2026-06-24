//!JSX
// const JavascriptXML = () => {
//   return <h1>Im JSX</h1>
// }

// export default JavascriptXML

//!Rule 1: JSX must return a single parent element.
// const JavascriptXML = () => {
//   return <div>
//     <h1>Heading</h1>
//     <p>Lorem ipsum dolor sit amet.</p>
//   </div>
// }

// export default JavascriptXML

//!Rule 2: Every tag must be properly closed.
// const JavascriptXML = () => {
//   return <section>
//     <img src="favicon.svg"/>
//     <input />
//   </section>
// }
// export default JavascriptXML

//!Rule 3: Use className instead of class and htmlFor instead of for.
// const JavascriptXML = () => {
//   return <div>
//     <label htmlFor="name">Name:</label>
//     <h1 className="heading">Hello</h1>
//   </div>
// }

// export default JavascriptXML

//!Rule 4: Use camelCase for attributes.
// const JavascriptXML = () => {
//   return <table cellPadding="10" cellSpacing="10"></table>
// }

// export default JavascriptXML

//!Fragments

//*Way-1
// import React from 'react'
// const JavascriptXML = () => {
//   return <React.Fragment>
//     <h1>Hello</h1>
//     <p>Lorem ipsum dolor sit amet.</p>
//   </React.Fragment>
// }

// export default JavascriptXML

//*Way-2
// const JavascriptXML = () => {
//   return <>
//     <h1>Hello</h1>
//     <p>Lorem ipsum dolor sit amet.</p>
//   </>
// }

// export default JavascriptXML

//!Expression
// let greet = _ => "Good Afternoon"
// let hadFoodNicely = false;
// let reasons = ["Class","Food","Ac","Nightout"]
// const JavascriptXML = () => {
//   let name = "Monty"
//   return <>
//     <h1>My name is: {name}</h1>
//     <p>I am {22 + 5} years old</p>
//     <h1>{greet()} {name}</h1>
//     <h1>{hadFoodNicely ? "Sleep in the class" : "Still try to sleep"}</h1>
//     <h1>Reasons to feel sleepy</h1>
//     <ol>
//       {
//         reasons.map((ele) => {
//          return <li>{ele}</li>
//         })
//       }
//     </ol>
//   </>
// }
// export default JavascriptXML