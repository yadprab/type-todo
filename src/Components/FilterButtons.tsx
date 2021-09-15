import { motion } from "framer-motion";
import React, { useCallback, useContext } from "react";
import { dataContext } from "./dataContext";
function FilterButtons() {
  const context = useContext(dataContext);

  const onChangeClick = useCallback(() => {
    context?.setGlobalState({
      ...context.GlobalState,
      All: true,
      Completed: false,
      NotCompleted: false,
    });
  }, [context]);

  const onChangeClick2 = useCallback(() => {
    context?.setGlobalState({
      ...context.GlobalState,
      All: false,
      Completed: true,
      NotCompleted: false,
    });
  }, [context]);

  const onChangeClick3 = useCallback(() => {
    context?.setGlobalState({
      ...context.GlobalState,
      All: false,
      Completed: false,
      NotCompleted: true,
    });
  }, [context]);
  return (
    <>
      <div className="filter--buttons">
        <motion.button
          className={`filter--button ${
            context?.GlobalState.All ? "selected" : ""
          }`}
          id="all"
          onClick={onChangeClick}
        >
          All
        </motion.button>
        <button
          className={`filter--button ${
            context?.GlobalState.Completed ? "selected" : ""
          }`}
          id="completed"
          onClick={onChangeClick2}
        >
          Completed
        </button>
        <button
          className={`filter--button ${
            context?.GlobalState.NotCompleted ? "selected" : ""
          }`}
          id="not--completed"
          onClick={onChangeClick3}
        >
          Not Completed
        </button>
      </div>
    </>
  );
}

export default FilterButtons;
