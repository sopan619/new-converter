import React, { useState } from "react";

const Temp = () => {
  const [celsius, setCelsius] = useState();
  const [faren, setFaren] = useState();
  const [kelvin, setKelvin] = useState();

  // Function to convert to convert Celsius value to other units
  const cToF = (e) => {
    let val = e.target.value;
    setCelsius(val);
    setFaren(val * 1.8 + 32);
    setKelvin(val * 1 + 273.15);
  };
  // Function to convert to convert Fahrenheit value to other units
  const fToC = (e) => {
    let val = e.target.value;
    setFaren(val);
    setCelsius((val - 32) / 1.8);
    setKelvin((val - 32) / 1.8 + 273.15);
  };
  // Function to convert to convert Kelvin value to other units
  const kToAll = (e) => {
    let val = e.target.value;
    setKelvin(val);
    setCelsius(val - 273.15);
    setFaren((val - 273.15) * 1.8 + 32);
  };

  return (
    <div className="calclator-main mt-16 h-[91vh] overflow-y-hidden bg-gradient-to-t from-yellow-200 via-green-200 to-green-500">
      <div className="m-auto mt-[20vh] w-fit">
        <div className="container">
          <form className="flex flex-col font-mochi">
            <label
              className="py-2 text-xl font-bold text-slate-700"
              htmlFor="input-c"
            >
              Celsius
            </label>
            <input
              className="relative w-full rounded border-0 bg-amber-50 px-3  py-3 text-lg font-semibold text-amber-800 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring"
              type="number"
              placeholder="100 °C"
              id="input-c"
              value={celsius}
              onChange={cToF}
            />
            <label
              className="py-2 text-xl font-bold text-slate-700"
              htmlFor="input-f"
            >
              Fahrenheit
            </label>
            <input
              className="relative w-full rounded border-0 bg-amber-50 px-3  py-3 text-lg font-semibold text-amber-800 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring"
              type="number"
              placeholder="90 °F"
              value={faren}
              onChange={fToC}
              id="input-f"
            />
            <label
              className="py-2 text-xl font-bold text-slate-700"
              htmlFor="input-k"
            >
              Kelvin
            </label>
            <input
              className="relative w-full rounded border-0 bg-amber-50 px-3  py-3 text-lg font-semibold text-amber-800 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring"
              type="number"
              placeholder="200 K"
              value={kelvin}
              onChange={kToAll}
              id="input-k"
            />
            {/* <button type="submit" onClick={cToF}>
            Convert
          </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Temp;
