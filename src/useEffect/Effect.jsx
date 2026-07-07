import { useEffect, useState } from 'react'
import Unmount from './Unmount'

const Effect = () => {
  let [name, setName] = useState("Monty")
  let [age, setAge] = useState(23)
  let [salary, setSalary] = useState(10000)
 
  //!useEffect without Dependency
  // useEffect(() => {
  //   console.log("useEffect Running like componentDidUpdate()....")
  // })

  //!useEffect with Empty Dependency
  // useEffect(() => {
  //   console.log("useEffect Running like componentDidMount()...")
  // },[])

  //!useEffect with dependency
  // useEffect(() => {
  //   console.log("useEffect Running...")
  // },[name,age])

  let handleName = () => {
    setName("Pavan")
  }

  let handleAge = () => {
    setAge(age + 1)
  }

  let handleSalary = () => {
    setSalary(salary + 10000)
  }

  return (
    <div>
      {age<=30 && <Unmount/>}
      <h1>Name : {name}</h1>
      <button onClick={handleName}>Change Name</button>
      <h1>Age : {age}</h1>
      <button onClick={handleAge}>Increment Age</button>
      <h1>Salary : {salary}</h1>
      <button onClick={handleSalary}>Increment Salary</button>
    </div>
  )
}

export default Effect