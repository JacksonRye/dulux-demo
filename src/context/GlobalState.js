import React from "react";
import AppReducer from "./AppReducer";
const { createContext, useReducer } = require("react");

const colors = {
  white: [
    {
      hexColor: "#f4f0e4",
    },
    {
      hexColor: "#efe9df",
    },
    {
      hexColor: "#f1e9dc",
    },
    {
      hexColor: "#eeefea",
    },
  ],
  orange: [
    {
      hexColor: "#ed8c32",
    },
    {
      hexColor: "#d35338",
    },
    {
      hexColor: "#f0c8b0",
    },
  ],
  green: [
    {
      hexColor: "#2d6456",
    },

    {
      hexColor: "#90ddcd",
    },

    {
      hexColor: "#bee9de",
    },
  ],
};

const initialState = {
  paletteColors: [
    {
      hexColor: "#dadccc",
      name: "white"
    },
    {
      hexColor: "#ff8900",
      name: "orange"
    },
    {
      hexColor: "#00b5a2",
      name: "green"
    },
  ],

  colorList: colors.white,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setColorList(color) {
    console.log(`setColorList: ${color}`);
    dispatch({
      type: "SET_COLOR_LIST",
      payload: colors[color]
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        colors: state.colors,
        paletteColors: state.paletteColors,
        colorList: state.colorList,
        setColorList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
