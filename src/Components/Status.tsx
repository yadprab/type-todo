import React from "react";
import { Check } from "./Icons/Check";

function Status({ isCompleted }: { isCompleted: boolean }) {
  return (
    <>
      <div className="status--wrapper">
        {isCompleted ? (
          <p>
            <Check />
            Completed
          </p>
        ) : (
          <p>Recently Added</p>
        )}
      </div>
    </>
  );
}

export { Status };
