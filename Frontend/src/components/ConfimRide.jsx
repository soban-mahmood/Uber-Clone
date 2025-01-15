import React from "react";
import driverCar from "../assets/carimages.jpg";
const ConfimRide = ({ confrimRide, setconfrimVechilesOpen }) => {
  return (
    <>
      <div
        ref={confrimRide}
        className=" w-full fixed  z-10 bottom-0 translate-y-full bg-white"
      >
        <div className="flex flex-col items-center gap-2">
          <i
            className="ri-skip-down-fill mb-4 text-[30px]"
            onClick={() => {
              setconfrimVechilesOpen(false);
            }}
          />
          <img src={driverCar} alt="" />
          <h5 className="font-semibold mb-5 text-lg">Confrim your Ride</h5>
        </div>
        <div>
          {" "}
          <div>
            <hr />
            <div className="flex items-center gap-3 my-3 px-4 rounded-lg w-full">
              <div>
                <i className="ri-map-pin-range-fill font-bold text-[25px]"></i>
              </div>
              <div>
                <h3 className="font-bold text-[20px] tracking-tight">
                  562/11-A
                </h3>
                <h4 className="text-[#706969ee]">
                  Jhang road ,Faisalabad,Pakistan
                </h4>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <hr />
            <div className="flex items-center gap-3 my-3 px-4 rounded-lg w-full">
              <div>
                <i className="ri-checkbox-blank-fill font-bold text-[20px] "></i>
              </div>
              <div>
                <h3 className="font-bold text-[20px] tracking-tight">
                  Third Wave Coffee
                </h3>
                <h4 className="text-[#706969ee]">
                  17th Cross Rd , PWD Quarters ,1st Sector HSR
                  Layout,Faisalabad,Pakistan
                </h4>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <hr />
            <div className="flex items-center gap-3 my-3 px-4 rounded-lg w-full">
              <div>
                <i className="ri-cash-line font-bold text-[20px]"></i>
              </div>
              <div>
                <h3 className="font-bold text-[20px] tracking-tight">
                  Rs193.20
                </h3>
                <h4 className="text-[#706969ee]">Cash Cash</h4>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="flex justify-center gap-3 my-3 px-4 rounded-lg w-full">
          <button className="w-full bg-[#177525] font-semibold text-white py-3 rounded-lg">
            Confirm Ride
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfimRide;
