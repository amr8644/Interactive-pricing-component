import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import React from "react";

const InputRangeSlider = ({ currentPrice, updateMainPrice, resetYearly }) => {
  const updatePrice = (updatePrice) => {
    updateMainPrice(updatePrice);
    resetYearly(false);
  };
  return (
    <InputRange
      minValue={20}
      maxValue={120}
      value={currentPrice}
      class="[-webkit-slider-thumb:hsl(174, 86%, 45%)]"
      onChange={(value) => updatePrice(value)}
    />
  );
};

export default InputRangeSlider;
