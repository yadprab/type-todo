import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Main } from "./Components/Main";
import "./Styles/Styles.css";

import { dataContext, ACTIONTYPES } from "./Components/dataContext";
import { IState } from "./Components/interface";
import { IReducer } from "./Components/interface";

const initialState: IReducer["redState"] = [];

const reducer = (state: IReducer["redState"], action: ACTIONTYPES) => {
  switch (action.type) {
    case "Submit":
      return [...state, newTodo(action.payload)];
    default:
      return state;
  }
};

const newTodo = (value: string) => {
  return {
    id: uuidv4(),
    todo: value,
    isCompleted: false,
    isOpen: false,
    isDelete: false,
    isTrying: false,
  };
};

function App() {
  const [GlobalState, setGlobalState] = useState<IState["states"]>({
    startTasks: false,
    addTask: false,
    theme: "light",
    themeState: true,
    filterTask: false,
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <dataContext.Provider
        value={{ GlobalState, setGlobalState, state, dispatch }}
      >
        <Main />
      </dataContext.Provider>
    </>
  );
}

export { App };
