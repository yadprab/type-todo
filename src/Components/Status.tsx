import React from "react";
import { Check } from "./Icons/Check";

function Status({ isCompleted }: { isCompleted: boolean }) {
  return (
    <>
      <div className="status--wrapper">
        {isCompleted ? (
          <div className="completed">
            <Check />
            <p>Completed</p>
          </div>
        ) : (
          <p>Recently Added</p>
        )}
      </div>
    </>
  );
}

export { Status };
