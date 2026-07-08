import { useContext } from 'react'
import VictoriaMemorial from './VictoriaMemorial'
import { ChipsContext } from './Zepto'

const Chaitanyapuri = () => {
  let chips = useContext(ChipsContext)
  return <>
    <p>I received {chips}</p>
    <VictoriaMemorial />
  </>
}

export default Chaitanyapuri