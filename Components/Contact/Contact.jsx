import React from 'react'

export default function Contact() {
  return (
    <>
      <div className=" min-h-screen justify-center items-center   bg-white flex  flex-col w-full">
        <div className="conatainer md:w-[600px] lg:w-full mx-auto gap-12 flex-col flex p-5 ">
          <div className="special_title mb-5  w-full relative text-center ">
            <h1 className='lg:text-5xl text-3xl mx-auto w-fit relative  pb-5 mb-4 font-bold before:bg-[#2c3e50]  before:w-full before:absolute before:left-0 before:bottom-0 before:h-[6px] text-[#2c3e50]'>CONATCT SECTION</h1>
            <span className='text-[#2c3e50] text-xl p-2 bg-white  absolute star1'><i _ngcontent-bvk-c6="" class="fa-solid fa-star"></i></span>
          </div>
          <div className="form w-full flex flex-col justify-between items-center gap-9">
            <input type="text" placeholder="userName" className="form-control rounded-lg focus:outline-0 border-0 border-b-[1px] border-b-[#dee2e6]   mx-auto md:w-full lg:w-[900px] border-bottom py-3 position-relative " />
            <input type="text" placeholder="userAge" className="form-control rounded-lg focus:outline-0 border-0 border-b-[1px] border-b-[#dee2e6]   mx-auto md:w-full lg:w-[900px] border-bottom py-3 position-relative " />
            <input type="text" placeholder="useEmail" className="form-control rounded-lg focus:outline-0 border-0 border-b-[1px] border-b-[#dee2e6]   mx-auto md:w-full lg:w-[900px] border-bottom py-3 position-relative " />
            <input type="text" placeholder="userPassword" className="form-control rounded-lg focus:outline-0 border-0 border-b-[1px] border-b-[#dee2e6]   mx-auto md:w-full lg:w-[900px] border-bottom py-3 position-relative " />
            <div className='md:w-full lg:w-[900px] flex justify-start'>
              <button className="btn btn-success text-white ">send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

