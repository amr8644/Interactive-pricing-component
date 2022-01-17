import React from "react";

const Main = () => {
  return (
    <div
      className={
        "lg:w-2/4 lg:h-1/2 flex items-center flex-col shadow-md sm:w-11/12 sm:h-auto"
      }
    >
      {/* Price */}
      <div className={"flex items-center justify-around my-10 w-11/12"}>
        <p className={"text-LightGrayishBlueTwo"}>100K PAGEVIEWS</p>
        <h2 className={"text-DarkDesaturatedBlue text-4xl font-bold"}>
          $16.00<span className={"text-GrayishBlue text-sm"}>/month</span>
        </h2>
      </div>
      {/* Range Control */}

      <div className={"w-11/12"}>
        <input type={"range"} min={"0"} max={"400"} className={"range"} />
      </div>
      {/* Toggle */}
      <div className={"w-11/12 flex items-center justify-center"}>
        <p className={"text-LightGrayishBlueTwo"}>Monthly Billing</p>
        <label
          for="toggle-example"
          class="flex items-center cursor-pointer relative mb-4"
        >
          <input type="checkbox" id="toggle-example" class="sr-only" />
          <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
        </label>
        <p className={"text-LightGrayishBlueTwo"}>Yearly Billing</p>
      </div>
    </div>
  );
};

export default Main;
