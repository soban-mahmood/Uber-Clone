import React from 'react'

const ConfimRide = ({confrimRide}) => {
  return (
    <div>
      <div ref={confrimRide} className="fixed w-full absolute top-0 z-100 bg-white">
        <div className="flex justify-center items-center w-full h-screen">
          <h1 className="text-4xl font-bold">Confirm Ride</h1>
  </div>
      </div>
    </div>
  )
}

export default ConfimRide
