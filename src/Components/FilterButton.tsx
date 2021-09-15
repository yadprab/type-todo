import React from "react";
import FilterButtons from "./FilterButtons";
import { Filter } from "./Icons/Filter";

function FilterButton() {
  return (
    <>
      <div className="filter--wrapper">
        <div className="top--filter">
          <Filter />
          <p> Sort the tasks</p>
        </div>
        <FilterButtons />
      </div>
    </>
  );
}

export { FilterButton };
