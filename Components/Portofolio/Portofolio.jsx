import React, { useState } from 'react';


export default function Portfolio() {
  const [arr, setarr] = useState([
    { src: "src/img/images1 (8).png", id: "1" },
    { src: "src/img/images2 (1).png", id: "2" },
    { src: "src/img/images3.png", id: "3" },
    { src: "src/img/images1 (8).png", id: "4" },
    { src: "src/img/images2 (1).png", id: "5" },
    { src: "src/img/images3.png", id: "6" },
  ])
  function showModel() {

  }


  return (
    <>
      <div className="model hidden   z-50 start-0 w-full top-0 left-0 h-screen bg-blue-600 bg-opacity-25  justify-center  items-center">
        <div className='max-w-screen-sm'><img src="src/img/images1 (8).png" className='w-full' alt="" /></div>
      </div>
      <div class=" min-h-screen justify-center items-center   bg-white flex  flex-col w-full"><div class="conatainer md:w-[600px] lg:w-full mx-auto gap-12 flex-col flex p-5 ">
        <div className="special_title w-full relative text-center">
          <h1 className='lg:text-5xl text-3xl mx-auto w-fit relative pb-5 mb-4 font-bold before:bg-[#2c3e50] before:w-full before:absolute before:left-0 before:bottom-0 before:h-[6px] text-[#2c3e50]'>PORTFOLIO COMPONENT</h1>
          <span className='text-[#2c3e50] text-xl p-2 bg-white absolute star2'><i className="fa-solid fa-star"></i></span>
        </div>
        <div className="row max-w-screen-xl  mx-auto p-5 grid grid-cols-3 gap-12 z-20">
          <div className="col-span-3 lg:col-span-1 cursor-pointer rounded-lg overflow-hidden bg-black w-full">
            <div onClick={() => showModel()} className="inner relative w-full">
              <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
              <img src="src/img/images1 (8).png" className='w-full' alt="" />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 cursor-pointer rounded-lg overflow-hidden bg-black w-full">
            <div onClick={() => showModel()} className="inner relative w-full">
              <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
              <img src="src/img/images2 (1).png" className='w-full' alt="" />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 cursor-pointer rounded-lg overflow-hidden bg-black w-full">
            <div onClick={() => showModel()} className="inner relative w-full">
              <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
              <img src="src/img/images3.png" className='w-full' alt="" />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 cursor-pointer rounded-lg overflow-hidden bg-black w-full">
            <div onClick={() => showModel()} className="inner relative w-full">
              <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
              <img src="src/img/images1 (8).png" className='w-full' alt="" />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 cursor-pointer rounded-lg overflow-hidden bg-black w-full">
            <div onClick={() => showModel()} className="inner relative w-full">
              <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
              <img src="src/img/images2 (1).png" className='w-full' alt="" />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 cursor-pointer rounded-lg overflow-hidden bg-black w-full">
            <div onClick={() => showModel()} className="inner relative w-full">
              <div className="absolute start-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[#1abc9c] z-50 w-full top-0 h-full flex justify-center items-center"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
              <img src="src/img/images3.png" className='w-full' alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}