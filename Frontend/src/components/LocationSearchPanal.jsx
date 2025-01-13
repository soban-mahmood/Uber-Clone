import React from "react";

const LocationSearchPanal = ({ setUberVechilesOpen, setPanalOpen }) => {
  const location = [
    "24B , Near Kapoors Cafe ,Soban Coding School",
    "22D , Near Kapoors Cafe ,Soban Coding School",
    "25F , Near Kapoors Cafe ,Soban Coding School",
    "90B , Near Kapoors Cafe ,Soban Coding School",
  ];
  return (
    <div div className="">
      {location.map((loc, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setUberVechilesOpen(true);
              setPanalOpen(false);
            }}
            className="flex items-center my-2  gap-2 top-10 active:border-black border-2 p-4 rounded-lg "
          >
            <h2 className="bg-[#eeeeee] rounded-3xl h-12 flex items-center justify-center w-14 font-semibold">
              <i className="text-xl ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-semibold">{loc}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanal;
