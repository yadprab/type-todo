import React, { useContext } from "react";
import { ButtonComp } from "./ButtonComp";
import { dataContext } from "./dataContext";
import { MidStatus } from "./MidStatus";
import { Status } from "./Status";

function ListComp() {
  const context = useContext(dataContext);
  return (
    <>
      <ul>
        {context?.state.map((s) => {
          return (
            <li className="todo-tasks" key={s.id}>
              <p>{s.todo}</p>
              <ButtonComp />
              <Status />
              <MidStatus />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export { ListComp };
