import React, { useContext, useCallback, ChangeEvent, useState } from "react";
import { CloseButton } from "./CloseButton";
import { dataContext } from "./dataContext";
import { IState2 } from "./interface";
import { wrap2 } from "./variants";
import { motion } from "framer-motion";
function Modal() {
  const context = useContext(dataContext);

  const [Input, setInput] = useState<IState2["states2"]>({
    value: "",
    error: false,
  });

  const handleClick = useCallback(() => {
    if (Input.value.trim() === "") {
      setInput({ ...Input, error: true });
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
      <motion.div
        className="modal--wrapper"
        variants={wrap2}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <div className="task--modal">
          <div className="modal--control">
            <label htmlFor="text">Enter the task name</label>
            <input
              type="text"
              name="text"
              id="text"
              className={Input.error ? "error--state" : ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const val = e.target.value;

                if (val.trim() === "") {
                  setInput({ ...Input, error: true });
                } else {
                  setInput({ error: false, value: val });
                }
              }}
            />
            {Input.error && <small>This field should not be empty</small>}
          </div>

          <button type="submit" className="add--tasks" onClick={handleClick}>
            Add Tasks
          </button>

          <CloseButton />
        </div>
      </motion.div>
    </>
  );
}

export default Modal;
