import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
  return (
    <div className="w-full z-50 fixed inset-0 backdrop-blur-sm bg-white bg-opacity-40 flex justify-center items-center">
      <RingLoader color="#1877F2" size={80} speedMultiplier={1.5} loading />
    </div>
  );
};

export default Loader;
