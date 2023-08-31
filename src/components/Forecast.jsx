// import React from 'react'

// eslint-disable-next-line react/prop-types
const Forecast = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6 mx-12">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2 mx-12" />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center mx-12">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="https://freepngimg.com/thumb/sun/4-2-sun-png-picture-thumb.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="https://freepngimg.com/thumb/sun/4-2-sun-png-picture-thumb.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="https://freepngimg.com/thumb/sun/4-2-sun-png-picture-thumb.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="https://freepngimg.com/thumb/sun/4-2-sun-png-picture-thumb.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            src="https://freepngimg.com/thumb/sun/4-2-sun-png-picture-thumb.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
