//!Example 1:
// import  { useState } from 'react'
// const ControlledComponent = () => {
//   let [name, setName] = useState("")
//   let handleNameChange = (e) => {
//     setName(e.target.value)
//   }
//   return (
//     <div>
//       <input type="text" placeholder='Enter your name' name="name" value={name} onChange={handleNameChange}/>
//       <h1>My name is : {name}</h1>
//     </div>
//   )
// }
// export default ControlledComponent

//!Example 2:
import { useState } from 'react'
const ControlledComponent = () => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    password: ""
  })
  let { name, email, password } = details
  let handleChange = (e) => {
    let { name, value } = e.target
    setDetails({ ...details, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(details)
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Registration Form 🔥</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' name='name' value={name} onChange={handleChange} />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' name='email' value={email} onChange={handleChange} />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' name='password' value={password} onChange={handleChange} />
        <br /><br />
        <input type="submit" value="Register" />
      </fieldset>
    </form>
  )
}
export default ControlledComponent