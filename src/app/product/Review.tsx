import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Review = () => {
  return (
    <div className='w-full'>
        {/* Reviews Section */}

 <div className='sm:w-[327px] sm:h-[318px] md:w-[1015px] md:h-[452px] rounded-lg bg-white mt-4 p-4'>
 <h3 className="text-2xl font-bold">Reviews</h3>
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Alex Stanton</span>
              <span className="text-gray-500 text-sm">3 days ago</span>
            </div>
            <div className="text-yellow-500">⭐⭐⭐⭐☆</div>
          </div>
          <p className="text-gray-600 sm:text-[12px] md:text-[20px] mt-2">
            The Nissan GT-R is an absolute beast! The handling is superb, and the performance is unmatched. It truly offers an incredible driving experience.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Regular Class</span>
              <span className="text-gray-500 text-sm">1 week ago</span>
            </div>
            <div className="text-yellow-500">⭐⭐⭐⭐☆</div>
          </div>
          <p className="text-gray-600 sm:text-[12px] md:text-[20px] mt-2">
            A great car for a weekend getaway. Comfortable, fast, and fun to drive! Highly recommend it.
          </p>
        </div>
        <div className='flex flex-row items-center justify-center sm:mt-4 md:mt-20 text-gray-500 sm:text-sm md:text-lg font-semibold gap-2'>
          <p>Show All</p>
          <IoIosArrowDown />
        </div>
       
        </div>
    </div>
  )
}

export default Review