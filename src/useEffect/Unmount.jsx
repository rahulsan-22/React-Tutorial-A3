import { useEffect } from 'react'

const Unmount = () => {
  useEffect(() => {
    return () => {
      console.log("useEffect running like componentWillUnmount()...")
    }
  },[])
  return (
    <div>Unmount</div>
  )
}

export default Unmount