'use client';

import { useState } from 'react';
import { BsFuelPumpDiesel } from 'react-icons/bs';
import { IoPeople } from 'react-icons/io5';
import { RiSteering2Line } from 'react-icons/ri';

const ProductDetail = () => {
  const [maxPrice, setMaxPrice] = useState(100);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  return (
    <div className="flex flex-col">
      {/* Product Details Section */}
      <section className="max-w-7xl mx-auto p-8 flex gap-12">
        {/* Left Side: Car Image and Overview */}
        <div
          className="bg-blue-500 rounded-lg text-white p-6 overflow-hidden w-[492px] h-[360px] pl-5"
        >
          {/* Background Text */}
          <h2 className="text-2xl font-bold mb-2">Sports car with the best <br /> design and acceleration</h2>
          <p className="text-sm mt-5">
            Safety and comfort while driving a <br />
            futuristic and elegant sports car
          </p>
          {/* Car Image */}
          <img
            src="./image 7.png"
            alt="Luxury Car"
            className="w-[460px] h-[116px] mt-20"
          />
        </div>

        {/* Right Side: Car Info and Pricing */}
        <div className="w-[60%]">
          <h2 className="text-3xl font-bold">Nissan GT - R</h2>
          <p className="mt-2 text-lg text-gray-500">Sports car with the best design and acceleration</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-yellow-500">⭐⭐⭐⭐☆</span> {/* Rating */}
            <p className="text-gray-600">(4.5 stars, 264 reviews)</p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Description</h3>
            <p className="text-gray-700 mt-2">
              The Nissan GT-R is an iconic sports car, renowned for its powerful engine, agile handling, and advanced technology. It's been designed to deliver an exhilarating driving experience on both track and street.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Details</h3>
            <ul className="text-gray-600 space-y-2 mt-2 flex gap-4">
              <li><BsFuelPumpDiesel size={24} /> 80L Fuel Tank</li>
              <li><RiSteering2Line size={24} /> Manual Transmission</li>
              <li><IoPeople size={24} /> 2 People</li>
            </ul>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-500">$80.00/day</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-8">Rent Now</button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto p-8 mt-12 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-bold">Reviews</h3>
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Alex Stanton</span>
              <span className="text-gray-500 text-sm">3 days ago</span>
            </div>
            <div className="text-yellow-500">⭐⭐⭐⭐☆</div>
          </div>
          <p className="text-gray-600 mt-2">
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
          <p className="text-gray-600 mt-2">
            A great car for a weekend getaway. Comfortable, fast, and fun to drive! Highly recommend it.
          </p>
        </div>
      </section>

      {/* Similar Cars Section */}
      <section className="max-w-7xl mx-auto p-8 mt-12">
        <h3 className="text-2xl font-bold">Similar Cars</h3>
        <div className="grid grid-cols-3 gap-8 mt-6">
          {/* Car Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="./car.png" alt="Car" className="w-full h-auto" />
            <p className="text-lg font-semibold mt-4">Koenigsegg</p>
            <div className="flex items-center gap-3 text-gray-500">
              <BsFuelPumpDiesel size={20} /> 90L | <RiSteering2Line size={20} /> Manual | <IoPeople size={20} /> 2 People
            </div>
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-bold text-blue-500 text-xl">$99.00/day</h4>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
            </div>
          </div>

          {/* Car Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="./car (2).png" alt="Car" className="w-full h-auto" />
            <p className="text-lg font-semibold mt-4">Nissan GT - R</p>
            <div className="flex items-center gap-3 text-gray-500">
              <BsFuelPumpDiesel size={20} /> 80L | <RiSteering2Line size={20} /> Manual | <IoPeople size={20} /> 2 People
            </div>
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-bold text-blue-500 text-xl">$80.00/day</h4>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="./car (3).png" alt="Car" className="w-full h-auto" />
            <p className="text-lg font-semibold mt-4">Rolls-Royce</p>
            <div className="flex items-center gap-3 text-gray-500">
              <BsFuelPumpDiesel size={20} /> 70L | <RiSteering2Line size={20} /> Manual | <IoPeople size={20} /> 4 People
            </div>
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-bold text-blue-500 text-xl">$96.00/day</h4>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
            </div>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-3 gap-8 mt-6">
          {/* Car Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="./car.png" alt="Car" className="w-full h-auto" />
            <p className="text-lg font-semibold mt-4">Koenigsegg</p>
            <div className="flex items-center gap-3 text-gray-500">
              <BsFuelPumpDiesel size={20} /> 90L | <RiSteering2Line size={20} /> Manual | <IoPeople size={20} /> 2 People
            </div>
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-bold text-blue-500 text-xl">$99.00/day</h4>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
            </div>
          </div>

          {/* Car Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="./car (2).png" alt="Car" className="w-full h-auto" />
            <p className="text-lg font-semibold mt-4">Nissan GT - R</p>
            <div className="flex items-center gap-3 text-gray-500">
              <BsFuelPumpDiesel size={20} /> 80L | <RiSteering2Line size={20} /> Manual | <IoPeople size={20} /> 2 People
            </div>
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-bold text-blue-500 text-xl">$80.00/day</h4>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="./car (3).png" alt="Car" className="w-full h-auto" />
            <p className="text-lg font-semibold mt-4">Rolls-Royce</p>
            <div className="flex items-center gap-3 text-gray-500">
              <BsFuelPumpDiesel size={20} /> 70L | <RiSteering2Line size={20} /> Manual | <IoPeople size={20} /> 4 People
            </div>
            <div className="flex justify-between items-center mt-4">
              <h4 className="font-bold text-blue-500 text-xl">$96.00/day</h4>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Rent Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
