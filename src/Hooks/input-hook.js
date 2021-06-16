import { useEffect, useReducer, useState } from "react";
const defaultInputs = [
  {
    name: "first name",
    isInvalid: false,
    error: "",
  },
  {
    name: "last name",
    isInvalid: false,
    error: "",
  },
  {
    name: "email",
    isInvalid: false,
    error: "",
  },
  {
    name: "phone",
    isInvalid: false,
    error: "",
  },
  {
    name: "address",
    isInvalid: false,
    error: "",
  },
  {
    name: "city",
    isInvalid: false,
    error: "",
  },

  {
    name: "state",
    isInvalid: false,
    error: "",
  },
  {
    name: "zip",
    isInvalid: false,
    error: "",
  },
];

const inputReducer = (state, action) => {
  let updatedDatas;
  updatedDatas = [...state];
  const index = state.findIndex((form) => form.name === action.type);
  if (index === -1) {
    return updatedDatas;
  } else if (action.value.length === 0 && (!action.focus || action.focus)) {
    updatedDatas[index] = {
      name: action.type,
      isInvalid: true,
      error: `${action.type} is requried.`,
    };
    return updatedDatas;
  } else  {
    updatedDatas[index] = {
      name: action.type,
      isInvalid: false,
      valid: true,
      error: "",
    };
    switch (action.type) {
      case action.type === "first name"
        ? "first name"
        : action.type === "city"
        ? "city"
        : action.type === "state"
        ? "state"
        : "last name":
        if (
          new RegExp(`[^a-zA-z]`).test(action.value) ||
          new RegExp(`[\\\\_]`).test(action.value)
        ) {
          updatedDatas[index] = {
            name: action.type,
            isInvalid: true,
            valid: false,
            error: "No Integer, WhiteSpaces & Special characters",
          };
        }
        return updatedDatas;
      case "email":
        if (
          !new RegExp(
            `^[A-Za-z0-9._:$!%-]+@[A-Za-z0-9_.]+.[A-Za-z]{3,4}$`
          ).test(action.value)
        ) {
          updatedDatas[index] = {
            name: action.type,
            isInvalid: true,
            valid: false,
            error: "Invalid format",
          };
        }
        return updatedDatas;
      case "phone":
        if (action.value.length !== 10) {
          updatedDatas[index] = {
            name: action.type,
            isInvalid: true,
            valid: false,
            error: 'Number must be 10 digit & Don"t > or < 10',
          };
        }
        return updatedDatas;
      case "address":
        return updatedDatas;
      default:
        return updatedDatas;
    }
  }
};

const useInput = () => {
  const [inputForm, inputDispatch] = useReducer(inputReducer, defaultInputs);
  const [isBlur, setIsBlur] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    let flag = false;
    inputDispatch({ type: name, value, focus: isBlur });
    setIsBlur(false);
    for (let input in inputForm) {
      if (inputForm[input]) {
        flag = true;
      }
    }
    setIsFormValid(flag);
  }, [isBlur, name, value]);
  const submitEventHandler = (event) => {
    event.preventDefault();
  };

  const changeEventHandler = (event) => {
    setName(event.target.name);
    setValue(event.target.value);
  };

  const blurEventHandler = (event) => {
    setValue(event.target.value);
    setName(event.target.name);
    setIsBlur(true);
  };
  return {
    changeEventHandler,
    blurEventHandler,
    submitEventHandler,
    inputForm,
    isFormValid,
  };
};

export default useInput;
