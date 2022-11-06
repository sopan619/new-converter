import React from "react";
import { ACTIONS } from "./Calculator";
const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      className=" border border-slate-300 bg-lime-200 text-3xl text-slate-900 outline-none hover:border-slate-400 hover:bg-lime-300 hover:shadow-md"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
