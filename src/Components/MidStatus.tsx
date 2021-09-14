import React, { useContext } from "react";
import { dataContext } from "./dataContext";

function MidStatus({ id, isCompleted }: { id: string; isCompleted: boolean }) {
  const context = useContext(dataContext);
  return (
    <>
      <div className="mid--wrapper">
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
      </div>
    </>
  );
}

export { MidStatus };
