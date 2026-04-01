import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "*",
  divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator | undefined>(undefined);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();

    if (subResult === Infinity) {
      setPrevNumber("");
      return;
    }

    setPrevNumber(`${subResult}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);

  const buildNumber = (numberString: string) => {
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      if (numberString === "0" && !number.includes(".")) return;
    }

    setNumber(number + numberString);
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperation.current = undefined;
    setPrevNumber("0");
  };

  const calculateSubResult = () => {
    const [firstValue, operator, secondValue] = formula.split(" ");

    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    if (isNaN(secondNumber)) return firstNumber;

    switch (operator) {
      case Operator.add:
        return firstNumber + secondNumber;

      case Operator.substract:
        return firstNumber - secondNumber;

      case Operator.multiply:
        return firstNumber * secondNumber;

      case Operator.divide:
        return firstNumber / secondNumber;

      default:
        throw new Error(`Operación ${operator} no implementada`);
    }
  };

  const clean = () => {
    setFormula("0");
    setNumber("0");
    setPrevNumber("0");

    lastOperation.current = undefined;
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber("0");
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };

  const toggleSign = () => {
    if (number.startsWith("-")) {
      return setNumber(number.replace("-", ""));
    }

    return setNumber(`-${number}`);
  };

  return {
    formula,
    number,
    prevNumber,

    buildNumber,
    calculateResult,
    calculateSubResult,
    clean,
    deleteLast,
    toggleSign,

    addOperation,
    divideOperation,
    multiplyOperation,
    substractOperation,
  };
};
