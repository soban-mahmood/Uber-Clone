import React from 'react'
import logo from '../assets/Uber_logo_2018.png'

const Home = () => {
  return (
    <div className="h-screen">
   <img src={logo} className="w-20 absolute left-5 top-5" alt="" />
   <div className="h-screen w-screen">
    <img src="https://www.uberpeople.net/attachments/369988/" className= "h-full w-full object-cover" alt="MAP" />
   </div>
   <div className='bg-white absolute top-0 p-5'>
    <h4 className='text-xl font-semibold mb-4'>Find a trip</h4>
    <form className="">
      <input type="text" placeholder="Add pick-up location" className="border p-2 w-full rounded-md  bg-[#EEEEEE] font-semibold" />
      <input type="text" placeholder="Enter your destination  " className="border p-2 w-full rounded-md mt-2 bg-[#EEEEEE] font-semibold" />
      <button className="bg-blue-500 text-white p-2 rounded-md">Search</button>
    </form>
   </div> bg-[#EEEEEE] font-semibold
    </div>
  )
}

export default Home
