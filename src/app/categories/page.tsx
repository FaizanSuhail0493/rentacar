'use client';

import { useState } from 'react';
import { IoPeople, IoSwapVerticalOutline } from 'react-icons/io5';
import { RiSteering2Line } from 'react-icons/ri';
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { IoIosHeartEmpty } from 'react-icons/io';
import Link from 'next/link';

const Categories = () => {
  const [maxPrice, setMaxPrice] = useState(100);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 p-5 border-r border-gray-300">
          <h3 className="text-lg font-semibold mb-2">Type</h3>
          <ul className="space-y-3">
            <li><input type="checkbox" id="sport" className="mr-2" /><label htmlFor="sport">Sport (10)</label></li>
            <li><input type="checkbox" id="suv" className="mr-2" /><label htmlFor="suv">SUV (12)</label></li>
            <li><input type="checkbox" id="mpv" className="mr-2" /><label htmlFor="mpv">MPV (16)</label></li>
            <li><input type="checkbox" id="sedan" className="mr-2" /><label htmlFor="sedan">Sedan (20)</label></li>
            <li><input type="checkbox" id="coupe" className="mr-2" /><label htmlFor="coupe">Coupe (14)</label></li>
            <li><input type="checkbox" id="hatchback" className="mr-2" /><label htmlFor="hatchback">Hatchback (18)</label></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">Capacity</h3>
          <ul className="space-y-3">
            <li><input type="checkbox" id="2person" className="mr-2" /><label htmlFor="2person">2 Person (10)</label></li>
            <li><input type="checkbox" id="4person" className="mr-2" /><label htmlFor="4person">4 Person (14)</label></li>
            <li><input type="checkbox" id="6person" className="mr-2" /><label htmlFor="6person">6 Person (16)</label></li>
            <li><input type="checkbox" id="8ormore" className="mr-2" /><label htmlFor="8ormore">8 or More (16)</label></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">Price</h3>
          <div>
            <label>Max: ${maxPrice.toFixed(2)}</label>
            <input type="range" min="0" max="100" value={maxPrice} onChange={handlePriceChange} className="w-full mt-2" />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-5">
          {/* Filters Section */}
          <section className="flex justify-between gap-4 py-6 bg-gray-100 shadow-md px-8 mb-6">
            {/* Pick-Up Section */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <input type="radio" id="pickup" name="type" defaultChecked />
                <label htmlFor="pickup" className="font-semibold pl-2">Pick-Up</label>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="Location" className="border rounded-md p-2" />
                <input type="date" placeholder="Date" className="border rounded-md p-2" />
                <input type="time" placeholder="Time" className="border rounded-md p-2" />
              </div>
            </div>

            {/* Swap Icon */}
            <IoSwapVerticalOutline size={24} className='mt-12 bg-blue-500 text-white font-b' />

            {/* Drop-Off Section */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <input type="radio" id="dropoff" name="type" />
                <label htmlFor="dropoff" className="font-semibold pl-2">Drop-Off</label>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="Location" className="border rounded-md p-2" />
                <input type="date" placeholder="Date" className="border rounded-md p-2" />
                <input type="time" placeholder="Time" className="border rounded-md p-2" />
              </div>
            </div>
          </section>

          {/* Car Listings Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Car Listing Item 1 */}
            <div className="bg-white h-[388px] w-full rounded-lg shadow-md">
              <div className="flex justify-between pr-7 pt-5">
                <p className="ml-3 text-2xl font-bold">Kawasaki</p>
                <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">Sport</p>
              <img src="./car.png" alt="Car Image" className="pt-24 mt-8 pl-6" />
              <div className="flex mt-2 ml-4 gap-2 text-gray-400">
                <BsFuelPumpDiesel size={24} />
                <p>90L</p>
                <RiSteering2Line size={24} />
                <p>Manual</p>
                <IoPeople size={24} />
                <p>2 People</p>
              </div>
              <div className="p-4 flex justify-between">
                <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</button> */}
                <Link href={'/product'} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</Link>
              </div>
            </div>

            {/* Car Listing Item 2 (Repeat the same structure for other cars) */}
            <div className="bg-white h-[388px] w-full rounded-lg shadow-md">
              <div className="flex justify-between pr-7 pt-5">
                <p className="ml-3 text-2xl font-bold">Honda</p>
                <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">Sedan</p>
              <img src="./car.png" alt="Car Image" className="pt-24 mt-8 pl-6" />
              <div className="flex mt-2 ml-2 gap-2 text-gray-400">
                <BsFuelPumpDiesel size={24} />
                <p>80L</p>
                <RiSteering2Line size={24} />
                <p>Automatic</p>
                <IoPeople size={20} />
                <p>4 People</p>
              </div>
              <div className="p-4 flex justify-between">
                <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</button>
              </div>
            </div>

            {/* Car Listing Item 3 (Repeat the same structure for other cars) */}
            <div className="bg-white h-[388px] w-full rounded-lg shadow-md">
              <div className="flex justify-between pr-7 pt-5">
                <p className="ml-3 text-2xl font-bold">BMW</p>
                <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">SUV</p>
              <img src="./car.png" alt="Car Image" className="pt-24 mt-8 pl-6" />
              <div className="flex mt-2 ml-4 gap-2 text-gray-400">
                <BsFuelPumpDiesel size={24} />
                <p>95L</p>
                <RiSteering2Line size={24} />
                <p>Manual</p>
                <IoPeople size={24} />
                <p>5 People</p>
              </div>
              <div className="p-4 flex justify-between">
                <h1 className="font-bold text-blue-500 text-2xl pt-5">$89.99/day</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</button>
              </div>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Car Listing Item 1 */}
            <div className="bg-white h-[388px] w-full rounded-lg shadow-md">
              <div className="flex justify-between pr-7 pt-5">
                <p className="ml-3 text-2xl font-bold">Kawasaki</p>
                <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">Sport</p>
              <img src="./car.png" alt="Car Image" className="pt-24 mt-8 pl-6" />
              <div className="flex mt-2 ml-4 gap-2 text-gray-400">
                <BsFuelPumpDiesel size={24} />
                <p>90L</p>
                <RiSteering2Line size={24} />
                <p>Manual</p>
                <IoPeople size={24} />
                <p>2 People</p>
              </div>
              <div className="p-4 flex justify-between">
                <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</button>
              </div>
            </div>

            {/* Car Listing Item 2 (Repeat the same structure for other cars) */}
            <div className="bg-white h-[388px] w-full rounded-lg shadow-md">
              <div className="flex justify-between pr-7 pt-5">
                <p className="ml-3 text-2xl font-bold">Honda</p>
                <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">Sedan</p>
              <img src="./car.png" alt="Car Image" className="pt-24 mt-8 pl-6" />
              <div className="flex mt-2 ml-2 gap-2 text-gray-400">
                <BsFuelPumpDiesel size={24} />
                <p>80L</p>
                <RiSteering2Line size={24} />
                <p>Automatic</p>
                <IoPeople size={24} />
                <p>4 People</p>
              </div>
              <div className="p-4 flex justify-between">
                <h1 className="font-bold text-blue-500 text-2xl pt-5">$69.99/day</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</button>
              </div>
            </div>

            {/* Car Listing Item 3 (Repeat the same structure for other cars) */}
            <div className="bg-white h-[388px] w-full rounded-lg shadow-md">
              <div className="flex justify-between pr-7 pt-5">
                <p className="ml-3 text-2xl font-bold">BMW</p>
                <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">SUV</p>
              <img src="./car.png" alt="Car Image" className="pt-24 mt-8 pl-6" />
              <div className="flex mt-2 ml-4 gap-2 text-gray-400">
                <BsFuelPumpDiesel size={24} />
                <p>95L</p>
                <RiSteering2Line size={24} />
                <p>Manual</p>
                <IoPeople size={24} />
                <p>5 People</p>
              </div>
              <div className="p-4 flex justify-between">
                <h1 className="font-bold text-blue-500 text-2xl pt-5">$89.99/day</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</button>
              </div>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Car Listing Item 1 */}
            <div className="bg-white h-[388px] w-full rounded-lg shadow-md">
              <div className="flex justify-between pr-7 pt-5">
                <p className="ml-3 text-2xl font-bold">Kawasaki</p>
                <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">Sport</p>
              <img src="./car.png" alt="Car Image" className="pt-24 mt-8 pl-6" />
              <div className="flex mt-2 ml-4 gap-2 text-gray-400">
                <BsFuelPumpDiesel size={24} />
                <p>90L</p>
                <RiSteering2Line size={24} />
                <p>Manual</p>
                <IoPeople size={24} />
                <p>2 People</p>
              </div>
              <div className="p-4 flex justify-between">
                <h1 className="font-bold text-blue-500 text-2xl pt-5">$79.99/day</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</button>
              </div>
            </div>

            {/* Car Listing Item 2 (Repeat the same structure for other cars) */}
            <div className="bg-white h-[388px] w-full rounded-lg shadow-md">
              <div className="flex justify-between pr-7 pt-5">
                <p className="ml-3 text-2xl font-bold">Honda</p>
                <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">Sedan</p>
              <img src="./car.png" alt="Car Image" className="pt-24 mt-8 pl-6" />
              <div className="flex mt-2 ml-2 gap-2 text-gray-400">
                <BsFuelPumpDiesel size={22} />
                <p>80L</p>
                <RiSteering2Line size={22} />
                <p>Automatic</p>
                <IoPeople size={22} />
                <p>4 People</p>
              </div>
              <div className="p-4 flex justify-between">
                <h1 className="font-bold text-blue-500 text-2xl pt-5">$69.99/day</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</button>
              </div>
            </div>

            {/* Car Listing Item 3 (Repeat the same structure for other cars) */}
            <div className="bg-white h-[388px] w-full rounded-lg shadow-md">
              <div className="flex justify-between pr-7 pt-5">
                <p className="ml-3 text-2xl font-bold">BMW</p>
                <IoIosHeartEmpty size={24} />
              </div>
              <p className="ml-3">SUV</p>
              <img src="./car.png" alt="Car Image" className="pt-24 mt-8 pl-6" />
              <div className="flex mt-2 ml-4 gap-2 text-gray-400">
                <BsFuelPumpDiesel size={24} />
                <p>95L</p>
                <RiSteering2Line size={24} />
                <p>Manual</p>
                <IoPeople size={24} />
                <p>5 People</p>
              </div>
              <div className="p-4 flex justify-between">
                <h1 className="font-bold text-blue-500 text-2xl pt-5">$89.99/day</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">Rent Now</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Categories;
