import Image from 'next/image'
import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BiMessageDots } from 'react-icons/bi'
import { FaCarAlt } from 'react-icons/fa'
import { GiNetworkBars } from 'react-icons/gi'
import { IoWalletOutline } from 'react-icons/io5'
import { MdOutlineDateRange } from 'react-icons/md'
import { RiHome5Fill, RiSettingsLine} from 'react-icons/ri'
import { TbLogout2 } from 'react-icons/tb'
import { VscBriefcase } from 'react-icons/vsc'

const Dashboard = () => {
  return (
    <div>
    <div className="flex justify-center bg-gray-200">
      {/* Sidebar */}
      <aside className="sm:hidden md:flex w-[286px] h-[900px] bg-white shadow-md p-4 flex flex-col justify-between">
        {/* Main Menu */}
        <div>
          <h2 className="text-gray-500 text-sm font-light mb-8 mt-2">MAIN MENU</h2>
          <ul className="space-y-2">
            <li className="flex items-center bg-blue-700 rounded-md p-2 text-white">
              <span className="mr-3 text-[20px] font-bold"><RiHome5Fill /></span> Dashboard
            </li>
            <li className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md">
              <span className="mr-3 text-[20px] text-gray-400"><FaCarAlt /></span> Car Rent
            </li>
            <li className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md">
              <span className="mr-3 text-[20px] text-gray-400"><GiNetworkBars /></span> Insight
            </li>
            <li className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md">
              <span className="mr-3 text-[20px] text-gray-400"><IoWalletOutline /></span> Reimburse
            </li>
            <li className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md">
              <span className="mr-3 text-[20px] text-gray-400"><BiMessageDots /></span> Inbox
            </li>
            <li className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md">
              <span className="mr-3 text-[20px] text-gray-400"><MdOutlineDateRange /></span> Calendar
            </li>
          </ul>

          {/* Preferences */}
          <h2 className="text-gray-800 text-lg font-bold mt-6 mb-4">
            PREFERENCES
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md">
              <span className="mr-3 text-[20px] text-gray-400"><RiSettingsLine /></span> Settings
            </li>
            <li className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md">
              <span className="mr-3 text-[20px] text-gray-400"><AiOutlineExclamationCircle /></span> Help & Center
            </li>
            <li className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md">
              <span className="mr-3 text-[20px] text-gray-400"><VscBriefcase /></span> Dark Mode
            </li>
          </ul>
        </div>

        {/* Log Out */}
        <button className="flex items-center text-gray-500 p-2 hover:bg-gray-100 rounded-md">
          <span className="mr-3 text-[20px] text-gray-400"><TbLogout2 /></span> Log Out
        </button>
      </aside>

      {/* Main Content */}

      <main className='flex sm:flex-col md:flex-row justify-center items-center sm:gap-0 md:gap-4'>

        {/* Detail Rental */}

        <div className='sm:w-[327px] sm:h-[1272px] md:w-[534px] md:h-[836px] bg-white mt-5  md:ml-8 rounded-lg'>
        
        <h2 className='text-xl text-black font-semibold ml-4 pt-4'>Details Rental</h2>
        <div className='ml-4 md:mt-4 rounded-lg sm:w-[295px] md:w-[486px]  md:h-[272px]'>
            <Image
                         src="/Maps.png"
                         alt="Luxury Car"
                         width={486}
                         height={272}
                         />
                   </div>
                    {/* Car Image Area */}
                    <div className='flex mt-4'>
                    <div className='sm:w-[116px] sm:h-[64px] md:w-[132px] md:h-[72px] bg-blue-500 rounded-lg ml-4'>
                    <div className='sm:mt-2 md:mt-4 ml-2 pt-2 sm:w-[101px] sm:h-[32px] md:w-[116px] md:h-[70px]'>
                    <Image
                     src="/Image 8.png"
                     alt="Luxury Car"
                     width={116}
                     height={70}
                     />
                     </div>
                    </div>
                  <div className='flex-row ml-4'>
                  <h1 className='sm:text-[20px] md:text-[24px] font-bold'>Nissan GTR - R</h1>
                   <p className="text-gray-600 sm:text-[12px] md:text-[14px] md:mt-2">Sport Car</p>
                  </div>
                  </div>
                  {/* Pick up & Drop Off Section */}
                  <div>
                    {/* Pick-Up Section */}
        <div className="sm:mb-6 mt-8">
      <label className="flex items-center mb-2 p-4">
        <input type="radio" name="rental" className="mr-2" defaultChecked />
        <span className="text-gray-800 font-medium">Pick - Up</span>
      </label>
      <div className="md:w-[486px] grid grid-cols-1 md:grid-cols-3 ml-4 sm:space-y-7 md:space-y-0">
        <div>
          <label className="block text-gray-700 mb-1">Locations</label>
          <select className=" border border-gray-300 sm:bg-gray-200 sm:w-[295px] md:w-[140px] rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option className='sm:ml-4 md:ml-0'>Select your city</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Date</label>
          <select className=" border border-gray-300 sm:bg-gray-200 sm:w-[295] md:w-[140px] rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option className='sm:ml-4 md:ml-0'>Select Date</option>
          </select>
        </div>
        <div>
        <label className="block text-gray-700 mb-1">Time</label>
          <select className=" border border-gray-300 sm:bg-gray-200 sm:w-[295] md:w-[140px] rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option className='sm:ml-4 md:ml-0'>Select Your Time</option>
          </select>
        </div>
      </div>
    </div>
    <br />
    {/* Drop-Off Section */}
    <div>
      <label className="flex items-center sm:mb-8 md:mb-3 ml-4">
        <input type="radio" name="rental" className="mr-2" />
        <span className="text-gray-800 font-medium ">Drop - Off</span>
      </label>
      <div className="md:w-[486px] grid grid-cols-1 md:grid-cols-3 ml-4 border-b-2 sm:space-y-7 md:space-y-0">
        <div>
          <label className="block text-gray-700 mb-1">Locations</label>
          <select className=" border border-gray-300 sm:bg-gray-200 sm:w-[295] md:w-[140px] rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option className='sm:ml-4 md:ml-0'>Select Your City</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Date</label>
          <select className=" border border-gray-300 sm:bg-gray-200 sm:w-[295] md:w-[140px] rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option className='sm:ml-4 md:ml-0'>Select Date</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Time</label>
          <select className=" border border-gray-300 sm:bg-gray-200 sm:w-[295] md:w-[140px] rounded-md px-2 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option className='sm:ml-4 md:ml-0'>Select Your Time</option>
          </select>
        </div>
      </div>
    </div>
                  </div>

            <div className='flex justify-between mt-4 p-4'>
            <div className='sm:mt-16 md:mt-2 p-2'>
                <span className='text-black font-bold'>Total Rental Price</span>
                <p className='text-gray-500 text-[14px]'>Overall price and includes rental discount</p>
            </div>
            <p className='text-3xl font-bold sm:mt-20 md:mt-5 mr-4'>$80.00</p>
            </div>
            </div>

            <div className='sm:hidden md:block flex-col'>
            <div className='w-[524] h-[324] bg-white mt-5 rounded-md'>
              
                    <Image
                     src="/Top 5 Car Rental.png"
                     alt="Luxury Car"
                     width={524}
                     height={324}
                     />
                     </div>
                     <div className='bg-white w-[524] h-[480] mt-8 rounded-md'>
                      <div className='flex justify-between'>
                     <h2 className='text-xl text-black font-semibold ml-4 pt-4'>Details Rental</h2>
                     <p className='text-sm text-blue-600 font-semibold p-4 mt-1 mr-4'>View All</p>
                     </div>
                      <div className='pt-8 ml-4'>
                     <Image
                     src="/Recent Transaction.png"
                     alt="Luxury Car"
                     width={476}
                     height={376}
                     />
                     </div>
                     </div>
            </div>

            <div className='md:hidden sm:flex flex-col justify-center'>
            <div className='w-[327] h-[508] bg-white mt-5 rounded-md'>
              
                    <Image
                     src="/Top 5.png"
                     alt="Luxury Car"
                     width={327}
                     height={508}
                     />
                     </div>
                     <div className='bg-white w-[327] h-[352] mt-8 rounded-md sm:mb-4 md:mb-0'>
                      <div className=''>
                     <Image
                     src="/Recent Transaction (1).png"
                     alt="Luxury Car"
                     width={327}
                     height={352}
                     />
                     </div>
                     </div>
            </div>

      </main>
      
    </div>
    </div>
  )
}

export default Dashboard