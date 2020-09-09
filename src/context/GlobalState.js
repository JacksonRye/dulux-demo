import React from "react";
import AppReducer from "./AppReducer";
const { createContext, useReducer } = require("react");

const colors = {
  white: [
    {
      hexColor: "#f4f0e4",
      name: "white",
    },
    {
      hexColor: "#efe9df",
      name: "white",
    },
    {
      hexColor: "#f1e9dc",
      name: "white",
    },
    {
      hexColor: "#eeefea",
      name: "white",
    },
  ],
  orange: [
    {
      hexColor: "#ed8c32",
      name: "orange",
    },
    {
      hexColor: "#d35338",
      name: "orange",
    },
    {
      hexColor: "#f0c8b0",
      name: "orange",
    },
  ],
  green: [
    {
      hexColor: "#2d6456",
      name: "green",
    },

    {
      hexColor: "#90ddcd",
      name: "green",
    },

    {
      hexColor: "#bee9de",
      name: "green",
    },
  ],
};

const initialState = {
  paletteColors: [
    {
      hexColor: "#dadccc",
      name: "white",
    },
    {
      hexColor: "#ff8900",
      name: "orange",
    },
    {
      hexColor: "#00b5a2",
      name: "green",
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
      payload: colors[color],
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        colors: state.colors,
        paletteColors: state.paletteColors,
        colorList: state.colorList,
        setColorList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
