import React from "react";
import { ACTIONS } from "./Calculator";
const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      className=" border border-slate-300 bg-lime-200 text-3xl text-slate-900 outline-none hover:border-slate-400 hover:bg-lime-300 hover:shadow-md"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
