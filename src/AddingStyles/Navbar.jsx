import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[100px] flex bg-black'>
      <aside className='basis-1/3 flex justify-center items-center'>
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Stranger-Things-logo.png" alt="logo" className='h-[120px] w-2/4'/>
      </aside>
      <aside className='basis-1/3 flex items-center justify-evenly text-xl font-semibold text-white'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </aside>
      <aside className='basis-1/3 flex justify-end items-center gap-10 pr-4'>
        <button className='border border-red-500 text-red-500 px-6 py-2 rounded-md'>Log In</button>
        <button className='bg-red-500 text-black px-6 py-2 rounded-md'>Sign Up</button>
      </aside>
    </nav>
  )
}
export default Navbar