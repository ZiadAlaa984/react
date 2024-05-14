import React from "react";

export default function Footer() {
    return (
        <>
            <div className="footer ">
                <div className="bg-[#2c3e50]  bottom-10 flex justify-center items-center  min-h-[300px] mx-auto w-full">
                    <div className="container sm:px-8  mx-auto w-full">
                        <div class="row  max-w-screen-xl  mx-auto p-5 grid grid-cols-3">
                            <div class="col-span-3 lg:col-span-1 p-7 text-white flex flex-col justify-center items-center">
                                <h4 class="text-xl">LOCATION</h4>
                                <h5>2215 John Daniel Drive</h5>
                                <h6>Clark, MO 65243</h6>
                            </div>
                            <div class="col-span-3 lg:col-span-1 p-7 text-white flex flex-col justify-center items-center">
                                <h4 class="text-xl mb-5">AROUND THE WEB</h4>
                                <div class="icons flex flex-row justify-between items-center gap-2">
                                    <span className="icon_span text-xl">
                                        <i class="fa-brands fa-facebook mx-1 icon"></i>
                                    </span>
                                    <span className="icon_span text-xl">
                                        <i class="fa-brands fa-twitter mx-1 icon"></i>
                                    </span>
                                    <span className="icon_span text-xl">
                                        <i class="fa-brands fa-linkedin-in mx-1 icon"></i>
                                    </span>
                                    <span className="icon_span text-xl">
                                        <i class="fa-solid fa-globe mx-1 icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-span-3 lg:col-span-1 p-7 text-white flex flex-col justify-center items-center">
                                <h4 class="text-2xl capitalize">ABOUT FREELANCER</h4>
                                <h5 class="text-xl mb-3 lg:m-0">
                                    Freelance is a free to use, licensed Bootstrap theme created by
                                    Route
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1c2c3d] absolute bottom-0 flex justify-center items-center  p-3  mx-auto w-full">
                    <h3 className="text-xl text-white  text-center">
                        Copyright © Your Website 2021
                    </h3>
                </div>
            </div>
        </>
    );
}
