import { motion } from "framer-motion";
import React, { useContext } from "react";
import { dataContext } from "./dataContext";
import { FilterButton } from "./FilterButton";
import { filter } from "./variants";

function FilterComp() {
  const context = useContext(dataContext);

  return (
    <>
      <motion.div
        className="filter--area"
        variants={filter}
        initial="initial"
        animate="visible"
        exit="exit"
      >
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
      </motion.div>
    </>
  );
}

export { FilterComp };
