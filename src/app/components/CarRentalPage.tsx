// components/CarRentalPage.tsx
import Link from "next/link";
import React from "react";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { RiSteering2Line } from "react-icons/ri";

const CarRentalPage: React.FC = () => {
  return (
    <div
      className="relative bg-gray-200 w-full max-w-[1440px] h-[2120px] mx-auto pt-8"
    >
      {/* Hero Section */}
        {/* Left Section */}
        <div className="flex justify-between gap-x-16 pl-8 pr-7">
        <div
          className=" bg-blue-400 rounded-lg text-white p-6 overflow-hidden w-[640px] h-[360px] pl-5"
        >
          {/* Background Text */}
          <h2 className="text-2xl font-bold mb-2">The Best Platform for Car Rental</h2>
          <p className="text-sm mt-5">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          {/* Car Image */}
          <img
            src="./image 7.png" 
            alt="Luxury Car"
            className="w-[460px] h-[116] mt-28 ml-20"
          />
        </div>

        {/* Right Section */}
        <div
          className=" bg-blue-600 rounded-lg text-white p-6 overflow-hidden w-[640px] h-[360px]"
        >
          {/* Background Text */}
          <h2 className="text-2xl font-bold mb-2">Easy way to rent a car at a low price</h2>
          <p className="text-sm">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          {/* Car Image */}
          <img
            src="./image 8.png"
            alt="Affordable Car"
            className="w-[340px] h-[108] mt-28 mx-36"
          />
        </div>
        </div>

      {/* Filters */}
      <section className="flex justify-between gap-4 py-6 bg-gray-100 shadow-md px-8">
        {/* Pick-Up Section */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm w-[582px] h-[132px]">
          <div className="flex items-center ">
            <input type="radio" id="pickup" name="type" defaultChecked />
            <label htmlFor="pickup" className="font-semibold">Pick-Up</label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="border rounded-md p-2"
            />
            <input
              type="date"
              placeholder="Date"
              className="border rounded-md p-2"
            />
            <input
              type="time"
              placeholder="Time"
              className="border rounded-md p-2"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 text-white p-4 rounded-full shadow-md">
            ↕️
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-2">
            <input type="radio" id="dropoff" name="type" />
            <label htmlFor="dropoff" className="font-semibold">Drop-Off</label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="border rounded-md p-2"
            />
            <input
              type="date"
              placeholder="Date"
              className="border rounded-md p-2"
            />
            <input
              type="time"
              placeholder="Time"
              className="border rounded-md p-2"
            />
          </div>
        </div>
      </section>

      {/* Cars List */}
      <div className="w-full h-[44px] border-gray-700 pt-4 flex justify-between">
        <h2 className="pl-9 text-gray-500">Populor Cars</h2>
        {/* <p className="text-blue-700 pr-10">View All</p> */}
        <Link href={"/categories"} className="text-blue-700 pr-10">View All</Link>
      </div>
      <br />
      <div className="w-[1312px] h-[388px] grid grid-cols-4 justify-center items-center mx-10 gap-24">
        <div className="bg-white h-[388px] w-[304px]">
          <div className="flex justify-between pr-7 pt-5">
            <p className="ml-3 text-2xl font-bold">Kawasaki</p>
            <IoIosHeartEmpty size={24} />
            </div>
            <p className="ml-3">Sport</p>
            <img
              src="./car.png" alt="" className="pt-24 mt-8 pl-6"
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

            <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Mastang</p>
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

            <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Rolls Royce</p>
            <p className="ml-3">Sport</p>
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

            <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Nisan GTR</p>
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
            </div>


<div className="w-full h-[44px] border-gray-700 pt-4 flex justify-between">
        <h2 className="pl-9 text-gray-500">Recomendation Cars</h2>
      </div>
      <div className="w-[1312px] h-[388px] grid grid-cols-4 justify-center items-center mx-10 gap-24">
        <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Kawasaki</p>
            <p className="ml-3">Sport</p>
            <img
              src="./car (4).png" alt="" className="pt-24 mt-8 pl-6"
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

            <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Kawasaki</p>
            <p className="ml-3">Sport</p>
            <img
              src="./car (5).png" alt="" className="pt-24 mt-8 pl-6"
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

            <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Rolls Royce</p>
            <p className="ml-3">Sport</p>
            <img
              src="./car (6).png" alt="" className="pt-24 mt-8 pl-6"
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

            <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Nisan GTR</p>
            <p className="ml-3">Sport</p>
            <img
              src="./car (7).png" alt="" className="pt-24 mt-8 pl-6"
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

            <br /><br />
            <div className="w-[1312px] h-[388px] grid grid-cols-4 justify-center items-center mx-10 gap-24">
        <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Kawasaki</p>
            <p className="ml-3">Sport</p>
            <img
              src="./car (8).png" alt="" className="pt-24 mt-8 pl-6"
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

            <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Kawasaki</p>
            <p className="ml-3">Sport</p>
            <img
              src="./car (9).png" alt="" className="pt-24 mt-8 pl-6"
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

            <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Rolls Royce</p>
            <p className="ml-3">Sport</p>
            <img
              src="./car (8).png" alt="" className="pt-24 mt-8 pl-6"
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

            <div className="bg-white h-[388px] w-[304px]">
            <p className="ml-3 pt-4 text-2xl font-bold">Nisan GTR</p>
            <p className="ml-3">Sport</p>
            <img
              src="./car (9).png" alt="" className="pt-24 mt-8 pl-6"
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
    </div>
  );
};

export default CarRentalPage;
