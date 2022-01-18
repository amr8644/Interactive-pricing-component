import React, { useState } from "react";
import InputRange from "./InputRange.js";
import Check from "./images/icon-check.svg";

const Main = () => {
  const [price, setPrice] = useState(20);
  const [yearly, setYearly] = useState(false);
  return (
    <div
      className={
        "lg:w-2/4 flex items-center flex-col shadow-md sm:w-11/12 sm:h-auto justify-between"
      }
    >
      {/* Price */}

      <div
        className={
          "flex items-center justify-around my-10 w-11/12 sm:flex-col md:flex-row"
        }
      >
        <p className={"text-LightGrayishBlueTwo"}>100K PAGEVIEWS</p>
        <h2 className={"text-DarkDesaturatedBlue text-4xl font-bold"}>
          ${price}.00
          <span className={"text-GrayishBlue text-sm"}>
            {yearly ? " / year" : " / month"}
          </span>
        </h2>
      </div>

      {/* Range Control */}
      <div class="w-11/12">
        <InputRange
          currentPrice={price}
          updateMainPrice={setPrice}
          resetYearly={setYearly}
        />
      </div>
      {/* Toggle */}
      <div className={"flex items-center justify-center w-10/12 my-4"}>
        <small className={"text-LightGrayishBlueTwo mx-3"}>
          Monthly Billing
        </small>
        <label
          for="toggle-example"
          class="flex items-center cursor-pointer relative"
        >
          <input
            type="checkbox"
            id="toggle-example"
            class="sr-only mx-3 bg-StrongCyan"
            onChange={setYearly}
          />
          <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
        </label>
        <small className={"text-LightGrayishBlueTwo mx-3"}>
          Yearly Billing{" "}
          <small class="px-3 bg-LightGrayishRed rounded-lg text-LightRed font-extrabold">
            25%
          </small>
        </small>
        <hr />
      </div>

      <div class="w-full flex sm:flex-col md:flex-row">
        {/* List*/}
        <div class="md:w-1/2 sm:w-full  my-5 mx-2 sm:flex sm:items-center sm:justify-center sm:text-center md:justify-start md:items-start md:text-left">
          <ul class="flex flex-col my-5">
            <small class="mb-2 text-GrayishBlue">Unlimited websites</small>
            <small class="mb-2 text-GrayishBlue">100% data ownership</small>
            <small class="mb-2 text-GrayishBlue">Email reports</small>
          </ul>
        </div>
        {/* Button */}
        <div class="md:w-1/2 sm:w-full  my-5 flex items-center justify-center">
          <button class="px-7 py-2 my-auto  border-none outline-none bg-DarkDesaturatedBlue text-white rounded-3xl cursor-pointer">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
