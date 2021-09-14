import React, { useContext, useCallback, ChangeEvent, useState } from "react";
import { CloseButton } from "./CloseButton";
import { dataContext } from "./dataContext";

function Modal() {
  const context = useContext(dataContext);

  const [Input, setInput] = useState({ value: "" });

  const handleClick = useCallback(() => {
    context?.setGlobalState({
      ...context.GlobalState,
      addTask: true,
      startTasks: false,
    });

    if (Input.value.trim() === "") {
      return;
    } else {
      context?.dispatch({ type: "Submit", payload: Input.value });
    }
  }, [context, Input.value]);
  return (
    <>
      <div className="modal--wrapper">
        <div className="task--modal">
          <div className="modal--control">
            <label htmlFor="text">Enter the task name</label>
            <input
              type="text"
              name="text"
              id="text"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const val = e.target.value;
                setInput({ value: val });
              }}
            />
          </div>
          <button type="submit" className="add--tasks" onClick={handleClick}>
            Add Tasks
          </button>

          <CloseButton />
        </div>
      </div>
    </>
  );
}

export default Modal;
