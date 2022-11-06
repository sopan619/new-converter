import React, { useState } from "react";

export default function Main() {
  const [feet, setFeet] = useState();
  const [inches, setInches] = useState(0);
  const [centimeters, setCentimeters] = useState(0);
  const [milimeters, setMiliMeters] = useState(0);
  const [meters, setMeters] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    const formValid = +feet >= 0 && +inches >= 0;
    if (!formValid) {
      return;
    }
    setCentimeters((+feet + +inches / 12) * 12 * 2.54);
    setMeters(
      Math.round(((+feet + +inches / 12) / 3.281 + Number.EPSILON) * 100) / 100
    );
    setMiliMeters(
      Math.round(((+feet + +inches / 12) * 304.8 + Number.EPSILON) * 100) / 100
    );
  };

  return (
    <>
      <div className="mt-[20vh] scale-125 ">
        <form
          className=" flex flex-col items-center space-y-3 py-4 align-middle md:flex-row md:justify-center md:space-x-0"
          onSubmit={submit}
        >
          <div className="feet flex w-[25%] justify-center font-mochi ">
            <label className="mx-3 text-lg font-bold text-amber-900">
              Feet
            </label>
            <input
              className="w-[80px] rounded-md border border-amber-800 px-2 md:w-[50%]"
              value={feet}
              placeholder="Enter feet"
              onChange={(e) => setFeet(e.target.value)}
            />
          </div>
          <div className="inch flex w-[25%] justify-center font-mochi ">
            <label className="mx-3 text-lg font-bold text-amber-900">
              Inches
            </label>
            <input
              className="w-[80px] rounded-md border border-amber-800 px-2 md:w-[50%]"
              value={inches}
              placeholder="0-12"
              onChange={(e) => setInches(e.target.value)}
            />
          </div>
        </form>
        <p className="mx-auto w-[280px] break-words text-center font-mochi text-sm md:w-fit md:text-base">
          equals to{" "}
          <span className="text-lg font-bold text-amber-900 md:text-xl">
            {meters}
          </span>{" "}
          m or{" "}
          <span className="text-lg font-bold text-amber-900 md:text-xl">
            {centimeters}
          </span>{" "}
          cm or{" "}
          <span className="text-lg font-bold text-amber-900 md:text-xl">
            {milimeters}
          </span>{" "}
          milimeters
        </p>
        <div className="flex justify-center py-2">
          {/* <button
            className="scale-75 rounded-lg bg-amber-400 py-2 px-5 text-sm font-bold uppercase text-amber-900 hover:bg-amber-600 hover:text-slate-100 md:scale-100"
            type="submit"
            onClick={submit}
          >
            calculate
          </button> */}
          <div className="grid items-start justify-center gap-8">
            <div className="group relative scale-75 md:scale-100">
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <button
                className="relative flex  items-center divide-x divide-gray-600 rounded-lg bg-amber-800 px-7 py-4 leading-none "
                type="submit"
                onClick={submit}
              >
                <span className=" text-amber-100 transition duration-200 group-hover:text-gray-100">
                  CALCULATE
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-box mx-auto mt-16 mb-24 w-[60vw] font-mono font-semibold text-amber-900 md:w-[45vw]">
        <li>
          You can enter the measurement value in Feet and Inches on the top
          input fields, and upon clicking Calculate you will get the converted
          value to Centimeters or Milimeters. From there you can calculate
          further as Metric convertions are rather easy to do.
        </li>
        <br />
        <li>
          In order to convert from <strong>Feet & Inches</strong> to{" "}
          <strong>CM or MM</strong> you need to first convert the Inches to
          Feet, and add it to the original Feet value and then multiply to value
          by <strong>30.48</strong> in order to get Centimeter value or by{" "}
          <strong>304.8</strong> to get Milimeters value. In order to get
          Meters, you will divide the length value by <strong>3.281.</strong>{" "}
          This will still give you an approximate result.
        </li>
      </div>
    </>
  );
}
