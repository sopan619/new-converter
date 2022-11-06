/* eslint-disable default-case */
import React, { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear,",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        previousOperand: null,
        operation: null,
        overwrite: true,
        currentOperand: evaluate(state),
      };

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    case "%":
      computation = (prev * current) / 100;
      break;
  }

  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

// THE REAL DEAL IS HERE

function Calcualtor() {
  // Time for some logic!!
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <>
      {/* The Main Div */}
      <div className="calclator-main mt-16 h-[91vh] overflow-y-hidden bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300">
        {/* The Calculator Title is over here */}
        <div className="mt-12 text-center font-mochi text-4xl font-bold text-amber-800 md:mt-8 md:pl-20">
          The Calcualtor
        </div>
        {/* The actual Calculator Starts from here */}
        <div
          className="hosting-div mx-auto -mt-4 grid scale-75 font-mochi md:mx-auto md:mt-[1rem] md:w-[300px] md:scale-100 "
          // Since I could not figure out the Tailwind utility classes for the below CSS, hence simply added them inside the style attribute, Peace!
          style={{
            gridTemplateColumns: "repeat(4, 6rem)",
            gridTemplateRows: "minmax(7rem,auto) repeat(5,6rem)",
          }}
        >
          {/* Here I am controlling the background for the Output field, used style Attribute since it wasn't working with tailwind classes for whatever reason, possibly due to gradient background usage */}
          <div
            className="output col-span-full flex flex-col items-end justify-around break-all border border-slate-500 bg-gradient-to-r from-green-300 via-green-400 to-green-500 p-3"
            style={{ opacity: "0.70" }}
          >
            <div className="previous-operand text-xl text-slate-900">
              {/* The previous calculated results will show up here */}
              {formatOperand(previousOperand)}
              {operation}
            </div>
            <div className="current-operand text-3xl font-semibold text-black">
              {/* The calculation part will go here */}
              {formatOperand(currentOperand)}
            </div>
          </div>
          <button
            className="border border-slate-300 bg-lime-200 text-3xl text-slate-900 outline-none hover:border-slate-400 hover:bg-lime-300 hover:shadow-md"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            AC
          </button>
          <button
            className=" border border-slate-300 bg-lime-200 text-3xl text-slate-900 outline-none hover:border-slate-400 hover:bg-lime-300 hover:shadow-md"
            onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
          >
            DEL
          </button>

          <OperationButton operation="%" dispatch={dispatch} />
          <OperationButton operation="÷" dispatch={dispatch} />
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <OperationButton operation="*" dispatch={dispatch} />
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <OperationButton operation="+" dispatch={dispatch} />
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <OperationButton operation="-" dispatch={dispatch} />

          <DigitButton digit="." dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
          <button
            className=" col-span-2  border border-slate-300 bg-lime-200 text-3xl text-slate-900  outline-none hover:border-slate-400 hover:bg-lime-300 hover:shadow-md"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calcualtor;

// !!  IMPORTANT PLUG-IN INFORMATION  !!
// Use this command to install the prettier plug in for tailwind css to automaticlaly sort the classes on save
// Since we have Prettier configured already, this plug in starts working as soon as we install it

// npm install -D prettier prettier-plugin-tailwindcss

//<button className=" border border-slate-300 bg-lime-200 text-3xl text-slate-900 outline-none hover:border-slate-400 hover:bg-lime-300 hover:shadow-md">÷</button>;
