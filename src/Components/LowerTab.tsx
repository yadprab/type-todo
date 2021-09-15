import React, { useContext, useEffect, useCallback, MouseEvent } from "react";
import { Filter } from "./Icons/Filter";
import { Moon } from "./Icons/Moon";
import { Sun } from "./Icons/Sun";
import { Plus } from "./Icons/Plus";
import { dataContext } from "./dataContext";
import { FilterComp } from "./FilterComp";
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
    },
    [context]
  );

  return (
    <>
      <div className="lower--tab">
        <button className="theme--button" onClick={changeTheme}>
          {context?.GlobalState.themeState ? <Moon /> : <Sun />}
        </button>
        <button
          className="plus--button"
          onClick={handleClick}
          disabled={context?.GlobalState.startTasks ? true : false}
        >
          <Plus />
        </button>
        <button
          className="filters--button"
          onClick={() => {
            context?.setGlobalState({
              ...context.GlobalState,
              filterTask: true,
            });
          }}
        >
          <Filter />
        </button>
        {context?.GlobalState.filterTask && <FilterComp />}
      </div>
    </>
  );
}

export { LowerTab };
