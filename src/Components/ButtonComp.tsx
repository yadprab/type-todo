import React from "react";
import { Delete } from "./Icons/Delete";
import { Down } from "./Icons/Down";

function ButtonComp() {
  return (
    <>
      <div className="button--wrap">
        <button id="accord--button">
          <Down />
        </button>
        <button id="delete--button">
          <Delete />
        </button>
      </div>
    </>
  );
}

export{  ButtonComp};
