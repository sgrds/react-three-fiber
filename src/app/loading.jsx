"use client";
import React from "react";
import ReactLoading from "react-loading";

const loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center justify-center gap-8 text-center text-lg font-medium">
        <ReactLoading
          type="spinningBubbles"
          height={80}
          width={80}
          color="#363636"
        />

        <h1>Wait Downloading Assets...</h1>
      </div>
    </div>
  );
};

export default loading;
