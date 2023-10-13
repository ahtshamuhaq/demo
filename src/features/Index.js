import React from "react";
import tasksImg from "../assets/task.png";
import timeSlot from "../assets/clock.png";
import onboarding from "../assets/pendulum.png";
import collab from "../assets/sms.png";
const Index = () => {
  return (
    <div className="w-11/12 mx-auto h-[80vh] items-center flex justify-between">
      <div>
        <p className="text-[#0086D5]">Learn about Features </p>
        <p className=" text-[38px] font-bold text-[#303030]">
          Our Top Features
        </p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed{" "}
        </p>
        <p>diam nonumy eirmod tempor invidunt ut labore et dolore </p>
        <p>magna aliquyam </p>
        <button className="text-white rounded-md mt-7 bg-[#0086D5] w-28 h-9">
          Get Started
        </button>
      </div>
      <div className="flex">
        <div>
          <div className="w-60 h-52 border border-[#707070] rounded-lg p-3">
            <div className="w-14 h-14 bg-[#259FE7] mt-3 flex justify-center rounded-lg p-2">
              <img src={tasksImg} alt="" />
            </div>
            <p className=" text-2xl font-bold mt-5 text-[#303030]">Tasks</p>
            <p className="text-xs mt-3">
              Lorem ipsum dolor sit amet, sconsetetur{" "}
            </p>
            <p className="text-xs mt-1">
              sadipscing elitr, sed diam nonumy d cs{" "}
            </p>
            <p className="text-xs mt-1">eirmod dummy text here. </p>
          </div>
          <div className="w-60 h-52 border border-[#707070] mt-4 rounded-lg p-3">
            <div className="w-14 h-14 bg-[#F7B369] mt-3 flex justify-center rounded-lg p-2">
              <img src={onboarding} alt="" />
            </div>
            <p className=" text-2xl font-bold mt-5 text-[#303030]">
              Onboarding
            </p>
            <p className="text-xs mt-3">
              Lorem ipsum dolor sit amet, sconsetetur{" "}
            </p>
            <p className="text-xs mt-1">
              sadipscing elitr, sed diam nonumy d cs{" "}
            </p>
            <p className="text-xs mt-1">eirmod dummy text here. </p>
          </div>
        </div>
        <div className="ml-7">
          <div className="w-60 h-52 border border-[#707070] mt-4 rounded-lg p-3">
            <div className="w-14 h-14 bg-[#FF5652] mt-3 flex justify-center rounded-lg p-2">
              <img src={timeSlot} alt="" />
            </div>
            <p className=" text-2xl font-bold mt-5 text-[#303030]">
              Time Slots
            </p>
            <p className="text-xs mt-3">
              Lorem ipsum dolor sit amet, sconsetetur{" "}
            </p>
            <p className="text-xs mt-1">
              sadipscing elitr, sed diam nonumy d cs{" "}
            </p>
            <p className="text-xs mt-1">eirmod dummy text here. </p>
          </div>
          <div className="w-60 h-52 border border-[#707070] mt-4 rounded-lg p-3">
            <div className="w-14 h-14 bg-[#16D356] mt-3 flex justify-center rounded-lg p-2">
              <img src={collab} alt="" />
            </div>
            <p className=" text-2xl font-bold mt-5 text-[#303030]">
              Collaboration
            </p>
            <p className="text-xs mt-3">
              Lorem ipsum dolor sit amet, sconsetetur{" "}
            </p>
            <p className="text-xs mt-1">
              sadipscing elitr, sed diam nonumy d cs{" "}
            </p>
            <p className="text-xs mt-1">eirmod dummy text here. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
