import React from "react";
import heroImg from "../assets/hero-img.png";
const Index = () => {
  return (
    <div className="bg-[#FAFAFA] h-[600px] ">
      <div className="w-11/12 mx-auto flex justify-between pt-16">
        <div>
          <div>
            <p className="text-[#303030] text-5xl pt-9 font-bold">
              Task Agency brings{" "}
            </p>
            <p className="text-[#303030] text-5xl mt-4 font-bold">
              all your tasks Teams{" "}
            </p>
            <p className="text-[#303030] text-5xl mt-4 font-bold">
              {" "}
              & tools together
            </p>
          </div>
          <div className="mt-8">
            <p className="text-[#707070] text-xl ">
              We Make - Your 'To-Do' Dreams
            </p>
            <p className="text-[#707070] text-xl">Come True</p>
          </div>
          <div>
            <input
              type="text"
              className="bg border-2 rounded-md border-[#A5A5A5] w-[300px] p-4 mt-8 h-12"
              placeholder="Email"
            />
            <button className="text-white rounded-md bg-[#0086D5] w-40 ml-6 h-12">
              Sign Up Its Free{" "}
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
