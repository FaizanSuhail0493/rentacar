'use client';

import { useState } from 'react';
import { IoPeople, IoSwapVerticalOutline } from 'react-icons/io5';
import { RiSteering2Line } from 'react-icons/ri';
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { IoIosHeartEmpty } from 'react-icons/io';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const Categories = () => {
  const [maxPrice, setMaxPrice] = useState(100);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  return (
    <div className="w-full flex md:flex-col bg-gray-200">
      <div className="flex justify-center">
        {/* Sidebar */}
        <div className="hidden md:block md:w-[360px] md:h-[1600px] p-5 bg-white border-r border-gray-300">
        <button className="flex items-center justify-center">
          <Link href="/">
            <FaArrowLeft className="text-gray-500 w-4 h-4 mr-4" />
          </Link>Press me to go back
        </button> <br />
          <h3 className="text-sm text-gray-500 mb-2">Type</h3><br />
          <ul className="space-y-3">
            <li><input type="checkbox" id="sport" className="mr-2" /><label htmlFor="sport">Sport (10)</label></li>
            <li><input type="checkbox" id="suv" className="mr-2" /><label htmlFor="suv">SUV (12)</label></li>
            <li><input type="checkbox" id="mpv" className="mr-2" /><label htmlFor="mpv">MPV (16)</label></li>
            <li><input type="checkbox" id="sedan" className="mr-2" /><label htmlFor="sedan">Sedan (20)</label></li>
            <li><input type="checkbox" id="coupe" className="mr-2" /><label htmlFor="coupe">Coupe (14)</label></li>
            <li><input type="checkbox" id="hatchback" className="mr-2" /><label htmlFor="hatchback">Hatchback (18)</label></li>
          </ul>

          <h3 className="text-sm text-gray-500 mt-6">Capacity</h3><br />
          <ul className="space-y-3">
            <li><input type="checkbox" id="2person" className="mr-2" /><label htmlFor="2person">2 Person (10)</label></li>
            <li><input type="checkbox" id="4person" className="mr-2" /><label htmlFor="4person">4 Person (14)</label></li>
            <li><input type="checkbox" id="6person" className="mr-2" /><label htmlFor="6person">6 Person (16)</label></li>
            <li><input type="checkbox" id="8ormore" className="mr-2" /><label htmlFor="8ormore">8 or More (16)</label></li>
          </ul><br />

          <h3 className="text-sm text-gray-500 mt-6">Price</h3><br />
          <div>
            <label>Max: ${maxPrice.toFixed(2)}</label>
            <input type="range" min="0" max="100" value={maxPrice} onChange={handlePriceChange} className="w-full mt-2" />
          </div>
        </div>

        {/* Main Content */}
        <div className="sm:w-full md:w-[1015px]  md:pl-4 flex-row justify-evenly">
          {/* Filters Section */}
           <div className='w-full flex sm:flex-col md:flex-row sm:justify-center md:justify-between items-center pb-4 gap-4 sm:mt-4'>
              {/* Pick Up Section */}
          
              <div className='sm:w-[295px] sm:h-[88px] md:w-[486px] md:h-[136px] sm:p-2 md:p-5 ml-4 bg-white md:mt-4 rounded-md'>
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
          
              <div className='sm:w-[295px] sm:h-[88px] md:w-[486px] md:h-[136px] sm:p-2 md:p-5 sm:ml-4 bg-white md:mt-4 rounded-md'>
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
            
          {/* Car Listings Section */}
          <div className='sm:w-full md:w-[1015px] md:h-[1228px]'>
          <div className="flex sm:flex-col md:flex-row gap-6 sm:justify-center sm:ml-4 md:justify-evenly">
            {/* Car Listing Item 1 */}
          <div className="bg-white h-[388px] w-[317px] rounded-md">
          <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Koenigsegg</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">Sport</p>
            <Link href="/product">
             <img
              src="./car.png" alt="" className="pt-24 mt-8 pl-6"
            />
            </ Link>
            <div className="flex mt-2 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>90L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
              Rent Now
            </button>
            </div>
            </div>
            {/* Car Listing Item 2 */}
            
 <div className="bg-white h-[388px] w-[317px] rounded-md">
            <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Nisan - GTR</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">Sport</p>
            <img
              src="./car (1).png" alt="" className="pt-24 mt-8 pl-6"
            />
            <div className="flex mt-2 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>90L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
              Rent Now
            </button>
            </div>
            </div>  

            {/* Car Listing Item 3 */}
            
<div className="bg-white h-[388px] w-[317px] rounded-md">
            <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Rolls - Royce</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">Sedan</p>
            <img
              src="./car (2).png" alt="" className="pt-24 mt-8 pl-6"
            />
            <div className="flex mt-2 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>90L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
              Rent Now
            </button>
            </div>
            </div>

          </div>
          <br />

          <div className="flex sm:flex-col md:flex-row gap-6 sm:justify-center sm:ml-4 md:justify-evenly">
            {/* Car Listing Item 1 */}
          <div className="bg-white h-[388px] w-[317px] rounded-md">
              <div className="flex justify-between pr-7 pt-5">
              <p className="ml-3 text-2xl font-bold">Nisan - GTR</p>
              <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">Sport</p>
              <img
                src="./car (3).png" alt="" className="pt-24 mt-8 pl-6"
              />
              <div className="flex mt-2 ml-4 gap-2 text-gray-400" >
              <BsFuelPumpDiesel size={24}/>
              <p>90L</p>
  
              <RiSteering2Line size={24}/>
              <p>Manual</p>
  
              <IoPeople size={24} />
              <p>2 People</p>
              </div>
              <div className="p-4 flex justify-between">
              <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
                Rent Now
              </button>
              </div>
              </div>
            {/* Car Listing Item 2 */}
            
          <div className="bg-white h-[388px] w-[317px] rounded-md">
           <div className="flex justify-between pr-7 pt-5">
             <p className="ml-3 text-2xl font-bold">All New Rush</p>
             <IoIosHeartEmpty size={24} />
             </div>
             <p className="ml-3">SUV</p>
             <img
               src="./car (4).png" alt="" className="pt-10 mt-10 pl-6"
             />
             <div className="flex mt-2 ml-4 gap-2 text-gray-400" >
             <BsFuelPumpDiesel size={24}/>
             <p>70L</p>
 
             <RiSteering2Line size={24}/>
             <p>Manual</p>
 
             <IoPeople size={24} />
             <p>6 People</p>
             </div>
             <div className="p-4 flex justify-between">
             <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
             <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
               Rent Now
             </button>
             </div>
             </div>

            {/* Car Listing Item 3 */}
            
            <div className="bg-white h-[388px] w-[317px] rounded-md">
            <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Car - V</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">SUV</p>
            <img
              src="./car (5).png" alt="" className="pt-10 mt-10 pl-6"
            />
            <div className="flex mt-2 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>80L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
              Rent Now
            </button>
            </div>
            </div>

          </div>
          <br />

          <div className="flex sm:flex-col md:flex-row gap-6 sm:justify-center sm:ml-4 md:justify-evenly">
            {/* Car Listing Item 1 */}
            <div className="bg-white h-[388px] w-[317px] rounded-md">
            <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">All New Terois</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">SUV</p>
            <img
              src="./car (6).png" alt="" className="pt-10 mt-10 pl-6"
            />
            <div className="flex mt-2 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>90L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
              Rent Now
            </button>
            </div>
            </div>



            {/* Car Listing Item 2 */}
            
            <div className="bg-white h-[388px] w-[317px] rounded-md">
            <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Car - V</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">Sport</p>
            <img
              src="./car (7).png" alt="" className="pt-10 mt-10 pl-6"
            />
            <div className="flex mt-2 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>80L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>2 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
              Rent Now
            </button>
            </div>
            </div>

            {/* Car Listing Item 3 */}
            
<div className="bg-white h-[388px] w-[317px] rounded-md">
          <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">All New Rush</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">SUV</p>
            <img
              src="./car (4).png" alt="" className="pt-10 mt-10 pl-6"
            />
            <div className="flex mt-2 ml-4 gap-2 text-gray-400" >
            <BsFuelPumpDiesel size={24}/>
            <p>70L</p>

            <RiSteering2Line size={24}/>
            <p>Manual</p>

            <IoPeople size={24} />
            <p>6 People</p>
            </div>
            <div className="p-4 flex justify-between">
            <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
              Rent Now
            </button>
            </div>
            </div>

          </div>
          </div>

          
          <div className="flex justify-center items-center">
            <Link href={"/categories"} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4 sm:mb-8">
              Show More Cars
            </Link>
            </div>


        </div>
      </div>
    </div>
  );
};

export default Categories;
