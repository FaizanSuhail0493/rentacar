import React from 'react'
import { IoSwapVerticalOutline } from 'react-icons/io5'

const Filters = () => {
  return (
    <div className='w-full flex sm:flex-col md:flex-row sm:justify-center gap-8 items-center'>
    {/* Pick Up Section */}

    <div className='sm:w-[295px] sm:h-[88px] md:w-[582px] md:h-[132px] sm:p-2 md:p-5 bg-white md:mt-4 rounded-md'>
    <div className="flex items-center mb-2">
      <input type="radio" id="pickup" name="type" defaultChecked />
      <label htmlFor="pickup" className="font-semibold ml-2">Pick-Up</label>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-4">
        {/* Location */}
    <div>
          <label className="block sm:text-sm md:text-lg font-bold text-black mb-1">Locations</label>
          <div className="relative">
            <select className="block sm:text-sm w-full sm:gap-2">
              <option>Select your city</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>
        </div>
      {/* Date */}
      <div>
          <label className="block sm:text-sm md:text-lg font-bold text-black mb-1">Date</label>
          <div className="relative">
            <select className="block sm:text-sm w-full focus:ring-blue-500">
              <option>Select your date</option>
              <option>Today</option>
              <option>Tomorrow</option>
            </select>
          </div>
        </div>
      {/* Time */}
      <div>
          <label className="block sm:text-sm md:text-lg font-bold text-black mb-1">Time</label>
          <div className="relative">
            <select className="block w-full sm:text-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select your time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>
    </div>

    </div>

      {/* Swap Button */}
  <div className="flex items-center justify-center bg-blue-500 p-[20px] rounded-md">
  <IoSwapVerticalOutline size={30} color='white'/>
    
  </div>

    {/* Drop Off Section */}

    <div className='sm:w-[295px] sm:h-[88px] md:w-[582px] md:h-[132px] sm:p-2 md:p-5 ml-4 bg-white md:mt-4 rounded-md'>
    <div className="flex items-center mb-2">
      <input type="radio" id="pickup" name="type" defaultChecked />
      <label htmlFor="pickup" className="font-semibold ml-2">Drop-Off</label>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-4">
        {/* Location */}
    <div>
          <label className="block sm:text-sm md:text-lg font-bold text-black mb-1">Locations</label>
          <div className="relative">
            <select className="block sm:text-sm w-full sm:gap-2">
              <option>Select your city</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>
        </div>
      {/* Date */}
      <div>
          <label className="block sm:text-sm md:text-lg font-bold text-black mb-1">Date</label>
          <div className="relative">
            <select className="block sm:text-sm w-full focus:ring-blue-500">
              <option>Select your date</option>
              <option>Today</option>
              <option>Tomorrow</option>
            </select>
          </div>
        </div>
      {/* Time */}
      <div>
          <label className="block sm:text-sm md:text-lg font-bold text-black mb-1">Time</label>
          <div className="relative">
            <select className="block w-full sm:text-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select your time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Filters