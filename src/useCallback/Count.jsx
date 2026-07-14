import React, { memo } from 'react'

const Count = ({ text, count }) => {
  console.log(`${text} Component Rendering...`)
  return (
    <div>
      <h1> {text} : {count}</h1>
    </div>
  )
}

export default memo(Count)