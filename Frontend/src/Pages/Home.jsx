import React, { useRef, useState } from "react";
import logo from "../assets/Uber_logo_2018.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanal from "../components/LocationSearchPanal";
import UberVechiles from "../components/UberVechiles";
import ConfimRide from "../components/ConfimRide";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [panalOpen, setPanalOpen] = useState(false);
  const panalRef = useRef(null);
  const vechileRef = useRef(null);
  const panalCloseRef = useRef(null);
  const confrimRide = useRef(null);
  const [uberVechilesOpen, setUberVechilesOpen] = useState(false);
  const [confrimVechilesOpen, setconfrimVechilesOpen] = useState(false);

  useGSAP(() => {
    if (panalOpen) {
      gsap.to(panalRef.current, {
        hidden: false,
        height: "70%",
        padding: 24,
      });
      gsap.to(panalCloseRef.current, {
        opacity: "1",
      });
    } else {
      gsap.to(panalRef.current, {
        height: "0%",
      });
      gsap.to(panalCloseRef.current, {
        opacity: "0",
      });
    }
  }, [panalOpen]);

  useGSAP(() => {
    if (uberVechilesOpen) {
      gsap.to(vechileRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vechileRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [uberVechilesOpen]);

  useGSAP(() => {
    if (confrimVechilesOpen) {
      gsap.to(confrimRide.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confrimRide.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confrimVechilesOpen]);

  const submitHandler = (e) => {
    e.preventDefault();
    setPickUp(pickUp);
    setDropOff(dropOff);
  };
  return (
    <div className="h-screen relative overflow-hidden">
      <img src={logo} className="w-20 absolute left-5 top-5" alt="" />
      <div className="h-screen w-screen">
        <img
          src="https://www.uberpeople.net/attachments/369988/"
          className="h-full w-full object-cover"
          alt="MAP"
        />
      </div>
      <div className="absolute h-screen w-full top-0 flex justify-end flex-col">
        <div className="h-[30%] p-5 bg-white relative  rounded-t-2xl">
          <h5
            onClick={() => {
              setPanalOpen(!true);
            }}
            className=" absolute top-5  right-5"
            ref={panalCloseRef}
          >
            <i className="ri-arrow-down-wide-line text-2xl"></i>
          </h5>
          <h4 className="text-xl font-semibold mb-2">Find a trip</h4>
          <form className="" onSubmit={submitHandler}>
            {/* <div className="line h-16 w-[3px] bg-black absolute bottom-[25%] left-[10%] rounded-full lg:hidden md:hidden"></div> */}
            <input
              type="text"
              placeholder="Add pick-up location"
              className="border p-2 w-full rounded-md mt-2 bg-[#EEEEEE] font-semibold px-8"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              onClick={() => {
                setPanalOpen(true);
              }}
            />
            <input
              type="text"
              placeholder="Enter your destination"
              className="border p-2 w-full rounded-md mt-3 bg-[#EEEEEE] font-semibold px-8"
              value={dropOff}
              onChange={(e) => setDropOff(e.target.value)}
              onClick={() => {
                setPanalOpen(true);
              }}
            />
          </form>
        </div>
        <div className=" bg-white h-0 " ref={panalRef}>
          <LocationSearchPanal
            setPanalOpen={setPanalOpen}
            setUberVechilesOpen={setUberVechilesOpen}
          />
        </div>
      </div>
      <UberVechiles
        vechileRef={vechileRef}
        setUberVechilesOpen={setUberVechilesOpen}
        setconfrimVechilesOpen={setconfrimVechilesOpen}
      />
      <ConfimRide
        confrimRide={confrimRide}
        setconfrimVechilesOpen={setconfrimVechilesOpen}
      />
    </div>
  );
};

export default Home;
