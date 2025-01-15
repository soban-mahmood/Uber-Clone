import React from "react";
import carPng from "../assets/carpng.webp";
import motoPng from "../assets/moto.webp";
import autoPng from "../assets/uberAuto.webp";

const UberVechiles = ({
  vechileRef,
  setUberVechilesOpen,
  setconfrimVechilesOpen,
}) => {
  return (
    <>
      <div
        ref={vechileRef}
        className="fixed w-full z-100 bottom-0 p-2 translate-y-full bg-white"
      >
        <div className="flex items-center justify-between px-4">
          <h2 className="text-2xl font-bold mb-5 ">Choose a Vehicle</h2>
          <i
            className="ri-skip-down-fill mb-4 text-[30px]"
            onClick={() => {
              setUberVechilesOpen(false);
            }}
          ></i>
        </div>
        <div
          className="flex justify-between p-2 mb-2   gap-6 items-center w-full border-[2px] active:border-black rounded-xl"
          onClick={() => {
            setconfrimVechilesOpen(true);
          }}
        >
          <img src={carPng} alt="Car" className="h-16 " />
          <div>
            <h4 className="font-semibold">
              UberGo{" "}
              <span>
                <i className="ri-user-fill"></i>4
              </span>
            </h4>
            <h5>2 mins away </h5>
            <p className="text-[#eeeee] text-[11px]">
              Affordable,compact rides
            </p>
          </div>
          <h2 className="font-bold">RS,93.3</h2>
        </div>
        <div
          className="flex justify-between p-2 mb-2 gap-6 items-center w-full border-[2px] active:border-black rounded-xl"
          onClick={() => {
            setconfrimVechilesOpen(true);
          }}
        >
          <img src={motoPng} alt="Car" className="h-16 " />
          <div>
            <h4 className="font-semibold">
              Moto{" "}
              <span>
                <i className="ri-user-fill"></i>1
              </span>
            </h4>
            <h5>2 mins away </h5>
            <p className="text-[#eeeee] text-[11px]">
              Affordable,Motorcycle rides
            </p>
          </div>
          <h2 className="font-bold">RS,67.3</h2>
        </div>
        <div
          className="flex justify-between p-2 mb-2 gap-6 items-center w-full border-[2px] active:border-black rounded-xl"
          onClick={() => {
            setconfrimVechilesOpen(true);
          }}
        >
          <img src={autoPng} alt="Car" className="h-16 " />
          <div>
            <h4 className="font-semibold">
              UberAuto{" "}
              <span>
                <i className="ri-user-fill"></i>3
              </span>
            </h4>
            <h5>2 mins away </h5>
            <p className="text-[#eeeee] text-[11px]">Affordable, ride</p>
          </div>
          <h2 className="font-bold">RS,119.3</h2>
        </div>
      </div>
    </>
  );
};

export default UberVechiles;
