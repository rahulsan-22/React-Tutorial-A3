import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  let {state:{email,phone}} = useLocation()
  return (
    <>
      <h1>Contact</h1>
      <h2>Email : {email}</h2>
      <h2>Phone : {phone}</h2>
    </>
  )
}

export default Contact