import React, { memo } from 'react'

const Button = ({ children, fun }) => {
  console.log(`${children} Component Rendering...`)
  return (
    <button onClick={fun}>{children}</button>
  )
}

export default memo(Button)