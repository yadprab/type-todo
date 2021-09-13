import React, { useContext } from "react";
import { dataContext } from "./dataContext";
import { Close } from "./Icons/Close";

function CloseButton() {
  const context = useContext(dataContext);
  return (
    <>
      <button
        id="close--button"
        onClick={() => {
          context?.setGlobalState({
            ...context.GlobalState,
            startTasks: false,
          });
        }}
      >
        <Close />
      </button>
    </>
  );
}

export { CloseButton };
