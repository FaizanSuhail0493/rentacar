"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { RiSteering2Line } from 'react-icons/ri';
import Review from './Review';
import { IoIosHeartEmpty } from 'react-icons/io';

const ProductDetail = () => {
  const [maxPrice, setMaxPrice] = useState(100);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  return (
    <div className="w-full flex sm:flex-col md:flex-row bg-gray-200 gap-4 justify-center">
      {/* Sidebar */}
      <div className="flex justify-center">
        <div className="hidden md:block md:w-[360px] md:h-[2016px] p-5 bg-white border-r border-gray-300">
          <button className="flex items-center justify-center">
            <Link href="/">
              <FaArrowLeft className="text-gray-500 w-4 h-4 mr-4" />
            </Link>
            Press me to go back
          </button>
          <br />
          <h3 className="text-sm text-gray-500 mb-2">Type</h3>
          <br />
          <ul className="space-y-3">
            <li>
              <input type="checkbox" id="sport" className="mr-2" />
              <label htmlFor="sport">Sport (10)</label>
            </li>
            <li>
              <input type="checkbox" id="suv" className="mr-2" />
              <label htmlFor="suv">SUV (12)</label>
            </li>
            <li>
              <input type="checkbox" id="mpv" className="mr-2" />
              <label htmlFor="mpv">MPV (16)</label>
            </li>
            <li>
              <input type="checkbox" id="sedan" className="mr-2" />
              <label htmlFor="sedan">Sedan (20)</label>
            </li>
            <li>
              <input type="checkbox" id="coupe" className="mr-2" />
              <label htmlFor="coupe">Coupe (14)</label>
            </li>
            <li>
              <input type="checkbox" id="hatchback" className="mr-2" />
              <label htmlFor="hatchback">Hatchback (18)</label>
            </li>
          </ul>
          <h3 className="text-sm text-gray-500 mt-6">Capacity</h3>
          <br />
          <ul className="space-y-3">
            <li>
              <input type="checkbox" id="2person" className="mr-2" />
              <label htmlFor="2person">2 Person (10)</label>
            </li>
            <li>
              <input type="checkbox" id="4person" className="mr-2" />
              <label htmlFor="4person">4 Person (14)</label>
            </li>
            <li>
              <input type="checkbox" id="6person" className="mr-2" />
              <label htmlFor="6person">6 Person (16)</label>
            </li>
            <li>
              <input type="checkbox" id="8ormore" className="mr-2" />
              <label htmlFor="8ormore">8 or More (16)</label>
            </li>
          </ul>
          <br />
          <h3 className="text-sm text-gray-500 mt-6">Price</h3>
          <br />
          <div>
            <label>Max: ${maxPrice.toFixed(2)}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full mt-2"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='flex-row sm:justify-center  md:justify-evenly'>
      <div className='flex sm:flex-col md:flex-row sm:justify-center sm:items-center sm:p-4 md:justify-evenly gap-8'>
      <div className='flex-col'>
        {/* Car Image Section */}
        <div className="bg-blue-500 rounded-lg text-white p-6 overflow-hidden sm:w-[327px] sm:h-[232px] md:w-[492px] md:h-[360px] pl-5 md:mt-4">
          <h2 className="sm:text-[18px] md:text-[30px] font-bold mb-2">
            Sports car with the best <br /> design and acceleration
          </h2>
          <p className="sm:text-[12px] md:text-[18px] md:mt-3">
            Safety and comfort while driving a <br />
            futuristic and elegant sports car
          </p>
          <Image
            src="/image 8.png"
            alt="Luxury Car"
            width={460}
            height={140}
            className="sm:mt-4 md:mt-8"
          />
        </div>

        {/* Car Additional Images */}
        <div className="flex flex-row gap-6">
          <div className="bg-blue-500 rounded-lg text-white md:w-[148px] md:h-[124px] mt-4">
            <Image
              src="/image 8.png"
              alt="Luxury Car"
              width={140}
              height={36}
              className="sm:pt-7 md:pt-10 md:ml-1"
            />
          </div>
          <div>
            <Image
              src="/view 2.png"
              alt="Luxury Car"
              width={148}
              height={124}
              className="pt-4"
            />
          </div>
          <div>
            <Image
              src="/view 3.png"
              alt="Luxury Car"
              width={148}
              height={124}
              className="pt-4"
            />
          </div>
        </div>
        </div>

        {/* Car Details Section */}
        <div className="sm:w-[327px] sm:h-[318px] md:w-[492px] md:h-[508px] sm:p-2 bg-white mt-4 rounded-md md:p-4">
          <h2 className="sm:text-xl md:text-3xl font-bold">Nissan GT - R</h2>
          <div className="sm:text-[12px] md:mt-4 flex items-center gap-3">
            <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
            <p className="text-gray-600 sm:text-[10px] md:text-[14px]">440+ Reviewer</p>
          </div>
          <div className="sm:mt-4 md:mt-6">
            <p className="text-gray-600 sm:text-[14px] md:text-[20px] mt-2 sm:leading-7 md:leading-9">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </p>
          </div>
          <div className="grid grid-cols-4 md:mt-8 sm:text-[12px] space-y-4">
            <h2 className="mt-4 text-gray-400">Type Car</h2>
            <h2>Sport</h2>
            <h2 className="text-gray-400">Capacity</h2>
            <h2>2 Persons</h2>
            <h2 className="text-gray-400">Steering</h2>
            <h2>Manual</h2>
            <h2 className="text-gray-400">Gasoline</h2>
            <h2>70L</h2>
          </div>
          <div className="sm:mt-7 md:mt-14 flex justify-between items-center">
            <div className="flex flex-row gap-2">
              <h2 className="text-3xl font-bold text-black">$80.00/</h2>
              <p className="text-2xl font-light text-gray-500">day</p>
            </div>
            <Link href="/billing">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-8">
              Rent Now
            </button>
            </Link>
          </div>
        </div>
        </div>
     {/* Review Section Moved Here */}
     <div className="justify-center p-2">
          <Review />
        </div>
        <br />
        <div className="flex sm:flex-col md:flex-row gap-6 sm:p-4 md:p-0 sm:justify-center md:justify-evenly">
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

          <div className="flex sm:flex-col md:flex-row gap-6 sm:p-4 md:p-0 sm:justify-center md:justify-evenly mb-4">
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


        </div>  
         
        
    
    </div>
  );
};

export default ProductDetail;
