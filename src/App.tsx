import React, { useState } from "react";
import { Main } from "./Components/Main";
import "./Styles/Styles.css";
import { dataContext } from "./Components/dataContext";
import { IState } from './Components/interface'
function App() {
  const [GlobalState, setGlobalState] = useState<IState['states']>({
    startTasks: false,
    addTask: false,
    theme: "light",
    themeState: true,
    filterTask: false,
  });

  return (
    <>
      <dataContext.Provider value={{ GlobalState, setGlobalState }}>
        <Main />
      </dataContext.Provider>
    </>
  );
}

export { App };
