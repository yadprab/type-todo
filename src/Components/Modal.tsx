import React from "react";
import { CloseButton } from "./CloseButton";

function Modal() {
  return (
    <>
      <div className="modal--wrapper">
        <div className="task--modal">
          <div className="modal--control">
            <label htmlFor="text">Enter the task name</label>
            <input type="text" name="text" id="text" />
          </div>
          <button type="submit" className="add--tasks">
            Add Tasks
          </button>

          <CloseButton />
        </div>
      </div>
    </>
  );
}

export default Modal;
