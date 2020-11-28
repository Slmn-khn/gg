/* 
  Developed by: Mohammed SalmanKhan M A
  Developed date: 28/Nov/2020
  calculator.js: Holds the logical implementation based on user input/events
*/

//Initial state of the application.
export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
};

//Process the input from UI 
export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`
  };
};

//When "=" is pressed hadle the inut given by user based on the selected arithematic operation
export const handleEqual = state => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null
  };

  //When Division is selected
  if (operator === "/") {
    //logic assuming when two numbers are same we need to show the division is zero
    if (previous === current) {
      return {
        currentValue: (previous / current) * 0,
        ...resetState
      };
    } else {
      return {
        currentValue: previous / current,
        ...resetState
      };
    }
  }

  //When Multiplication is selected
  if (operator === "*") {
    //logic assuming when two numbers are same we need to show the multiplication result to be incremented by 40 (consider only one input either current or previous)
    if (previous === current) {
      return {
        currentValue: previous + 40,
        ...resetState
      };
    } else {
      return {
        currentValue: previous * current,
        ...resetState
      };
    }
  }
  //When Addition is selected
  if (operator === "+") {
    //logic assuming when two numbers are same we need to show the addition incremented by 20
    if (previous === current) {
      return {
        currentValue: previous + current + 20,
        ...resetState
      };
    } else {
      return {
        currentValue: previous + current,
        ...resetState
      };
    }
  }

  //When Substraction is selected
  if (operator === "-") {
    //logic assuming when two numbers are same we need to show the substraction incremented by 10
    if (previous === current) {
      return {
        currentValue: (previous - current) + 10,
        ...resetState
      };
    } else {
      return {
        currentValue: previous - current,
        ...resetState
      };
    }
  }

  return state;
};

// handling the calculator operations for Clearing screen(state), positive negative, equals and percentage events
const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0"
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    default:
      return state;
  }
};

export default calculator;
