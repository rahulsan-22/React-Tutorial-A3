import React, { useContext } from 'react'
import { AlertContext, IcecreamContext } from './Zepto'

const LBNagar = () => {
  let icecream = useContext(IcecreamContext)
  let warning = useContext(AlertContext)
  return (
    <div>
      <p>I received {icecream}</p>
      <button onClick={warning}>Alert</button>
    </div>
  )
}

export default LBNagar