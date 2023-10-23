import React from "react";

const ControlPannel = ({ checked, onChange }) => {
  return (
    <div className="min-w-xl absolute bottom-0 right-0 rounded-md bg-white px-6 py-4 shadow-md ">
      <h1 className="pb-2 text-lg font-medium">Control Pannel</h1>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 ">HDRI</span>
      </label>
    </div>
  );
};

export default ControlPannel;
