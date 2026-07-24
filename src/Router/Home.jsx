import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Go to about page</button>
      <button onClick={()=>navigate("/contact",{state:{email:"modelmonty@gmail.com",phone:9876543210}})}>Go to Contact Page</button>
    </>
  )
}
export default Home