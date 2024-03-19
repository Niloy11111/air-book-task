import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
const Banner = () => {
  return (
    <div
      className="h-[80vh] w-full bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${`https://i.ibb.co/3Nh6y9p/65f2285bce36a62e819a38d134b77bed-Expires-1711929600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-d-Q.png`})`,
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
      }}
    >
      <Navbar></Navbar>

      <div className="flex items-center h-full">
        <div className="w-4/5 mx-auto">
          <h2 className="text-[40px] mb-5 ml-10 font-medium text-white">
            Welcome To <span className="text-[#006CE4] font-bold">AirBook</span>
          </h2>

          <div className="">
            <div className="bg-[#FFFFFF] h-[25vh] flex justify-center items-center rounded-xl">
              <div className="">
                <div className=" flex justify-between items-center rounded-lg ">
                  <div className="flex gap-4">
                    <div className="bg-[#EBF0F5] flex items-center gap-2 max-w-max px-5 rounded-lg py-2">
                      <span className="w-[18px] h-[18px] rounded-full border border-[#1E1E1E47]"></span>{" "}
                      <h2 className="text-[#09182E] text-sm">One Way</h2>
                    </div>
                    <div className="bg-[#006CE4] flex items-center gap-2 max-w-max px-5 rounded-lg py-2">
                      <span className="w-[18px] h-[18px] rounded-full border border-[#ffffff]">
                        <div className="w-[12px] h-[12px] bg-white rounded-full flex items-center justify-center mt-0.5 ml-0.5"></div>{" "}
                      </span>{" "}
                      <h2 className="text-[#FFFFFF] text-sm">Round Trip</h2>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#EBF0F5] flex items-center gap-2 max-w-max px-5 rounded-lg py-2">
                      <h2 className="text-[#006CE4] text-sm"> 1 Traveller</h2>{" "}
                      <MdKeyboardArrowDown className="text-[#006CE4] text-lg"></MdKeyboardArrowDown>
                    </div>
                    <div className="bg-[#EBF0F5] flex items-center gap-2 max-w-max px-5 rounded-lg py-2">
                      <h2 className="text-[#006CE4] text-sm">Economy</h2>{" "}
                      <MdKeyboardArrowDown className="text-[#006CE4] text-lg"></MdKeyboardArrowDown>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 ">
                  <div className="grid grid-cols-4 gap-4 mt-5">
                    <div className="flex border rounded-lg p-3 text-[#09182E] ">
                      <div className="border-r-2 pr-5">
                        <h2 className="font-semibold">DAC </h2>
                      </div>
                      <div className="pl-5">
                        <h2 className="font-semibold">Dhaka</h2>
                        <span className="text-sm font-medium">
                          Hazrat Shahjalal international
                        </span>
                      </div>
                    </div>
                    <div className="flex border rounded-lg p-3 text-[#09182E] ">
                      <div className="border-r-2 pr-5">
                        <h2 className="font-semibold">Cxb</h2>
                      </div>
                      <div className="pl-5">
                        <h2 className="font-semibold">Cox’s Bazar</h2>
                        <span className="text-sm font-medium">
                          Cox’s Bazar international
                        </span>
                      </div>
                    </div>
                    <div className="flex border rounded-lg p-3 text-[#09182E] ">
                      <div className="border-r-2 pr-5">
                        <h2 className="font-semibold">03 </h2>
                      </div>
                      <div className="pl-5">
                        <h2 className="font-semibold">October</h2>
                        <span className="text-sm font-medium">
                          Tuesday,2023
                        </span>
                      </div>
                    </div>

                    <div className="flex border rounded-lg p-3 text-[#09182E] ">
                      <div className="border-r-2 pr-5">
                        <h2 className="font-semibold">03 </h2>
                      </div>
                      <div className="pl-5">
                        <h2 className="font-semibold">October</h2>
                        <span className="text-sm font-medium">
                          Tuesday,2023
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFB700] mt-5 flex items-center justify-center px-6 rounded-lg">
                    <IoSearchOutline className="text-3xl font-semibold text-white"></IoSearchOutline>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
