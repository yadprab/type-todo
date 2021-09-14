import React, { useContext } from "react";
import { dataContext } from "./dataContext";
import { Delete } from "./Icons/Delete";
import { Down } from "./Icons/Down";

function ButtonComp({ id, isOpen }: { id: string; isOpen: boolean }) {
  const context = useContext(dataContext);

  return (
    <>
      <div className="button--wrap">
        <button
          id="accord--button"
          className={isOpen ? "rotate" : ""}
          onClick={() => {
            context?.dispatch({ type: "Toggle", payload: id });
          }}
        >
          <Down />
        </button>
        <button id="delete--button">
          <Delete />
        </button>
      </div>
    </>
  );
}

export { ButtonComp };
