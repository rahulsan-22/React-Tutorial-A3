import { useEffect } from 'react'

const Unmount = () => {
  // useEffect(() => {
  //   return () => {
  //     console.log("useEffect running like componentWillUnmount()...")
  //   }
  // },[])
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Hello")
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  },[])
  return (
    <div>Unmount</div>
  )
}

export default Unmount