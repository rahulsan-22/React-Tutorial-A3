import { useContext } from 'react'
import LBNagar from './LBNagar'
import { CafeContext } from './Zepto'

const VictoriaMemorial = () => {
  let {item1,item2,item3} = useContext(CafeContext)
  return <>
    <ol>
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
    </ol>
    <LBNagar/>
  </>
}

export default VictoriaMemorial