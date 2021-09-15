import { motion } from "framer-motion";
import React, { useContext } from "react";
import { dataContext } from "./dataContext";
import { mid } from "./variants";

function MidStatus({ id, isCompleted }: { id: string; isCompleted: boolean }) {
  const context = useContext(dataContext);

  return (
    <>
      <motion.div
        className="mid--wrapper"
        variants={mid}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <p>Completed the Task?</p>
        <button
          className="finished"
          id={isCompleted ? "undo" : "finished"}
          onClick={() => {
            context?.dispatch({ type: "Finished", payload: id });
          }}
        >
          {isCompleted ? "Undo" : "Finished"}
        </button>
      </motion.div>
    </>
  );
}

export { MidStatus };
