import React, { useContext, useCallback, ChangeEvent, useState } from "react";
import { CloseButton } from "./CloseButton";
import { dataContext } from "./dataContext";
import { IState2 } from "./interface";

function Modal() {
  const context = useContext(dataContext);

  const [Input, setInput] = useState<IState2["states2"]>({
    value: "",
    error: false,
  });

  const handleClick = useCallback(() => {
    if (Input.value.trim() === "") {
      setInput({ ...Input, error: true });
      console.log(Input);
    } else {
      context?.dispatch({ type: "Submit", payload: Input.value });
      setInput({ value: "", error: false });
      context?.setGlobalState({
        ...context.GlobalState,
        addTask: true,
        startTasks: false,
      });
    }
  }, [context, Input]);
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

                if (val.trim() === "") {
                  setInput({ ...Input, error: true });
                } else {
                  setInput({ error: false, value: val });
                }
              }}
            />
            {Input.error && <small>Enter the Taskname</small>}
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
