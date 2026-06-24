import React from 'react'

const SportsInfo = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <p>Players required : {data.players}</p>
    </div>
  )
}

export default SportsInfo