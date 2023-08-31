// import React from 'react'
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>

      <div className="flex flex-row justify-around items-center text-white py-3">
        <img
          src="https://freepngimg.com/thumb/sun/4-2-sun-png-picture-thumb.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">34°</p>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature />
            Real Feel:
            <span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear />
            Humidity:
            <span className="font-medium ml-1">43%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind />
            Wind:
            <span className="font-medium ml-1">3 Km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium m1-1 ">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium m1-1 ">09:17 PM</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
          High: <span className="font-medium m1-1 ">21°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          Low: <span className="font-medium m1-1 ">17°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
