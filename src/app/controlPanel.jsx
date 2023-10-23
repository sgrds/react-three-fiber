import React from "react";

const ControlPanel = ({ controls, setControls }) => {
  return (
    <div className="min-w-xl absolute bottom-0 right-0 rounded-md bg-white px-6 py-4 shadow-md ">
      <h1 className="pb-2 text-lg font-medium">Control Panel</h1>
      <div className="grid gap-4">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={controls.hdri}
            onChange={() => setControls({ ...controls, hdri: !controls.hdri })}
            className="peer sr-only"
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 ">HDRI</span>
        </label>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={controls.damping}
            onChange={() =>
              setControls({ ...controls, damping: !controls.damping })
            }
            className="peer sr-only"
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 ">
            Damping
          </span>
        </label>
        <div>
          <p>
            press <kbd>ctrl</kbd> and move mouse to pan across the screen
          </p>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
