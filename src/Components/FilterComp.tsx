import React, { useContext } from "react";
import { dataContext } from "./dataContext";
import { FilterButton } from "./FilterButton";

function FilterComp() {
  const context = useContext(dataContext);
  return (
    <>
      <div className="filter--area">
        <button
          id="filter--close"
          onClick={() => {
            context?.setGlobalState({
              ...context.GlobalState,
              filterTask: false,
              All: true,
              Completed: false,
              NotCompleted: false,
            });
          }}
        ></button>
        <FilterButton />
      </div>
    </>
  );
}

export { FilterComp };
