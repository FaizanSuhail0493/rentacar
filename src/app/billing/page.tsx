import Image from 'next/image'
import React from 'react'
import { HiOutlineShieldCheck } from 'react-icons/hi'

const Billing = () => {
  return (
    <div className='w-full  bg-gray-200 flex justify-evenly'>
        <div className='w-[1440px] sm:h-[3092px] md:h-[2240px] flex sm:flex-col-reverse md:flex-row justify-evenly'>
            {/* Right Section */}
        <div>
            {/* Billing Info Section */}

            <div className='sm:w-[327px] sm:h-[516px] sm:ml-2 md:w-[852px] md:h-[336px] bg-white border-2 border-blue-300 rounded-lg mt-4'>
            <div className="sm:p-4 md:p-6 mb-8">
             <h2 className="sm:text-[16px] md:text-[20px] font-semibold md:mb-2">Billing Info</h2>
            <p className="text-gray-500 sm:text-[12px] md:text-[14px] mb-4">Please enter your billing info</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:space-y-4">
            <div>
        <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full border border-gray-300 bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Phone Number</label>
        <input
          type="text"
          placeholder="Phone number"
          className="w-full border border-gray-300  bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Address</label>
        <input
          type="text"
          placeholder="Address"
          className="w-full border border-gray-300 bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Town / City</label>
        <input
          type="text"
          placeholder="Town or city"
          className="w-full border border-gray-300 bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
        </div>
        </div>
        </div>

        {/* Rental Infor */}
    <div className='sm:w-[327px] sm:h-[816px] sm:ml-2 md:w-[852px] md:h-[664px] bg-white border-2 border-blue-300 rounded-lg mt-4 p-5'>
    <h2 className="text-xl font-semibold mb-2">Rental Info</h2>
    <p className="text-gray-500 mb-4">Please select your rental date</p>

    {/* Pick-Up Section */}
    <div className="mb-6">
      <label className="flex items-center mb-2">
        <input type="radio" name="rental" className="mr-2" defaultChecked />
        <span className="text-gray-800 font-medium">Pick - Up</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Locations</label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option>Select your city</option>
          </select>
        </div>
        <div>
          <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Time</label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option>Select your time</option>
          </select>
        </div>
      </div>
    </div>
    <br />
    {/* Drop-Off Section */}
    <div>
      <label className="flex items-center mb-2">
        <input type="radio" name="rental" className="mr-2" />
        <span className="text-gray-800 font-medium">Drop - Off</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Locations</label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option>Select your city</option>
          </select>
        </div>
        <div>
          <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-black sm:text-[12px] md:text-[16px] font-bold mb-1">Time</label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300">
            <option>Select your time</option>
          </select>
        </div>
      </div>
    </div>
        </div>

    <div className='sm:w-[327px] sm:h-[732px] sm:ml-2 md:w-[852px] md:h-[664px] justify-center bg-white border-2 border-blue-300 rounded-lg mt-4 p-5'>
         {/* Payment Method */}
      <div className="">
        <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
        <p className="text-gray-500 mb-4">
          Please enter your payment method
        </p>

        {/* Credit Card Option */}
        <div className="mb-4 bg-gray-200 sm:w-[295px] sm:h-[484px] md:w-[804px] md:h-[308px] p-5 rounded-lg justify-center items-center">
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              className="mr-2"
              defaultChecked
            />
            <span className="font-medium">Credit Card</span>
            <span className="ml-auto">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                className="inline-block w-8 mr-2"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="MasterCard"
                className="inline-block w-8"
              />
            </span>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 space-y-4">
            <div>
            <label className="block text-gray-700 mb-1 mt-4">Card Number</label>
            <input
              type="text"
              placeholder="Cardnumber"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            /></div>
            <div>
             <label className="block text-gray-700 mb-1">Expiration Date</label>
            <input
              type="text"
              placeholder="DD / MM / YY"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            /></div>
            <div>
             <label className="block text-gray-700 mb-1">Card Holder</label>
            <input
              type="text"
              placeholder="Cardholder"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            /></div>
            <div>
             <label className="block text-gray-700 mb-1">CVC</label>
            <input
              type="text"
              placeholder="CVC"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            </div>
          </div>
        </div>

        {/* PayPal Option */}
        <div className=''>
        <label className="flex justify-center items-center sm:mb-2 md:mb-4 bg-gray-200 rounded-lg sm:w-[295px] sm:h-[52px] md:w-[804px] md:h-[56px] p-7">
          <input type="radio" name="payment" className="mr-5 size-5" />
          <span className="font-medium ">PayPal</span>
          <span className="ml-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="inline-block w-16"
            />
          </span>
        </label>

        {/* Bitcoin Option */}
        <label className="flex justify-center items-center mb-4 bg-gray-200 rounded-lg sm:w-[295px] sm:h-[52px] md:w-[804px] md:h-[56px] p-7">
          <input type="radio" name="payment" className="mr-5 size-5" />
          <span className="font-medium">Bitcoin</span>
          <span className="ml-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/Bitcoin.png"
              alt="Bitcoin"
              className="inline-block w-8"
            />
          </span>
        </label>
        </div>
        </div>
        </div>

        {/* Confirmatio Section */}

        <div className='sm:w-[327px] sm:h-[476px] sm:ml-2 md:w-[852px] md:h-[484px] justify-center bg-white border-2 border-blue-300 rounded-lg mt-4'>
        <div className="border-2 border-gray-200 rounded-lg sm:p-4 md:p-6 md:mb-8">
        <h2 className="text-[20px] font-semibold ">Confirmation</h2>
        <p className="text-gray-500 text-[14px] mb-8">
          We are getting to the end. Just a few clicks and your rental is ready!
        </p>

        {/* Checkboxes */}
        <div className="space-y-4 mb-6 ">
          <label className="flex items-center j pl-8 bg-gray-200 sm:w-[295] sm:h-[64] md:w-[804px] md:h-[56] rounded-md ">
            <input type="checkbox" className="mr-2" />
            <span className='sm:text-[12px] md:text-[16px]'>
              I agree with sending marketing and newsletter emails. No spam,
              promised!
            </span>
          </label>

          <label className="flex items-center pl-8 bg-gray-200 sm:w-[295] sm:h-[64] md:w-[804px] md:h-[56] rounded-md ">
            <input type="checkbox" className="mr-2" />
            <span className='sm:text-[12px] md:text-[16px]'>
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </div>

        {/* Rent Now Button */}
        <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
          Rent Now
        </button>
      </div>

      {/* Security Section */}
      <div className=" text-gray-600 sm:mt-2 md:mt-6 ml-4">
        <div className=" items-center">
        <HiOutlineShieldCheck size={34} className='text-black mb-2'/>
          <span className='text-black text-[16px] font-bold pt-2'>All your data are safe</span>
        </div>
        <p className="text-[12px]">
          We are using the most advanced security for your data.
        </p>
      </div>
        </div>

        </div>

        {/* left Section */}
        <div>
            <div className='sm:w-[327px] sm:h-[424px] md:w-[492px] md:h-[560px] bg-white border-2 border-blue-300 md:mt-4 p-5 sm:ml-2 md:ml-4 rounded-lg'>
            <h2 className='sm:text-sm md:text-xl font-bold'>Rental Summary</h2>
            <p className='text-[14px] text-gray-500 sm:text-[12px] md:text-[14px] md:pr-10'>Prices may change depending on the length of the rental and the price of your rental car.</p>
            <br />

            <div className='flex gap-4'>        
            <div className='sm:w-[116px] h-[80px] md:w-[138px] md:h-[108px] bg-blue-500 rounded-lg'>
            <div className='sm:mt-4 md:mt-9 sm:p-2 md:ml-2'>
            <Image
             src="/Image 8.png"
             alt="Luxury Car"
             width={116}
             height={40}
             />
             </div>
            </div>
            <div className='flex-row'>
            <h1 className='sm:text-md md:text-3xl font-bold'>Nissan GTR - R</h1>
            <div className=" flex sm:flex-col md:flex-row md:gap-3">
            <span className="text-yellow-500 sm:text-[12px] md:text-[20px]">⭐⭐⭐⭐☆</span>
            <p className="text-gray-600 sm:text-[12px] md:text-[14px]">440 + Reviewer</p>
          </div>
          </div>
            </div>

            <div className='flex justify-between md:mt-20 p-2'>
                <span className='text-gray-500  sm:text-[14px] md:text-[20px]'>Subtotal</span>
                <p className='font-bold'>$80.00</p>
            </div>
            <div className='flex justify-between md:mt-2 md:p-2 sm:ml-2 sm:mr-2'>
                <span className='text-gray-500  sm:text-[14px] md:text-[20px]'>Tax</span>
                <p className='font-bold'>$0</p>
            </div>

            <div className='flex justify-between sm:w-[295px] sm:h-[40px] md:w-[444px] md:h-[56px] bg-gray-200 rounded-lg'>
           <span className=" text-gray-500 sm:text-[14px] md:-text[18px] sm:pt-2 pl-4 md:p-4 ">Apply promo code</span>
           
           <p className=' text-black font-bold sm:text-[14px] md:-text[18px] md:p-4 pr-4 pt-2'>Apply Now</p>
           
            </div>

            <div className='flex justify-between mt-4'>
            <div className='mt-2 p-2'>
                <span className='text-black font-bold'>Total Rental Price</span>
                <p className='text-gray-500 sm:text-[10px] md:text-[14px]'>Overall price and includes rental discount</p>
            </div>
            <p className='text-3xl font-bold mt-5 md:mr-4'>$80.00</p>
            </div>

                  </div>

        </div>
       
        
    </div>
    </div>
  )
}

export default Billing











