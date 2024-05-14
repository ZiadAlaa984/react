import React from 'react'

export default function About() {
  return (
    <>
      <div className=" min-h-screen bg-[#1abc9c] flex justify-center items-center flex-col w-full">
        <div className="conatainer p-5 mx-auto">
          <div className="special_title relative text-center ">
            <h1 className='lg:text-5xl text-3xl mx-auto w-fit relative  pb-5 mb-4 font-bold before:bg-white before:w-full before:absolute before:left-0 before:bottom-0 before:h-[6px] text-white'>ABOUT COMPONENT</h1>
            <span className='text-white text-xl p-2  absolute star'><i _ngcontent-bvk-c6="" class="fa-solid fa-star"></i></span>
          </div>
          <div className="text mt-4  text-white flex flex-col lg:flex-row gap-5 justify-center items-center">
            <p className='max-w-[600px] text-xl'>        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
            <p className='max-w-[600px] text-xl'>        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>


      </div>
    </>
  )
}
