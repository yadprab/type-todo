import React, { useContext, useEffect, useCallback, MouseEvent } from "react";
import { Filter } from "./Icons/Filter";
import { Moon } from "./Icons/Moon";
import { Sun } from "./Icons/Sun";
import { Plus } from "./Icons/Plus";
import { dataContext } from "./dataContext";
function LowerTab() {
  const context = useContext(dataContext);

  useEffect(() => {
    if (!context?.GlobalState.themeState) {
      document.body.className = "dark";
    } else {
      document.body.className = "light";
    }
  }, [context?.GlobalState.themeState]);

  const changeTheme = useCallback(() => {
    context?.setGlobalState({
      ...context.GlobalState,
      themeState: !context.GlobalState.themeState,
    });
  }, [context]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      context?.setGlobalState({
        ...context.GlobalState,
        startTasks: true,
      });

      const tar = e.target as HTMLButtonElement;

      console.log(context?.GlobalState.startTasks);

      context?.GlobalState.startTasks
        ? (tar.disabled = true)
        : tar.removeAttribute("disabled");
    },
    [context]
  );

  return (
    <>
      <div className="lower--tab">
        <button className="theme--button" onClick={changeTheme}>
          {context?.GlobalState.themeState ? <Moon /> : <Sun />}
        </button>
        <button className="plus--button" onClick={handleClick}>
          <Plus />
        </button>
        <button className="filter--button">
          <Filter />
        </button>
      </div>
    </>
  );
}

export { LowerTab };
