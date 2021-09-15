import React, { useContext } from "react";
import { ButtonComp } from "./ButtonComp";
import { dataContext } from "./dataContext";
import { MidStatus } from "./MidStatus";
import { Status } from "./Status";

function ListComp() {
  const context = useContext(dataContext);
  return (
    <>
      <ul
        className={
          context?.GlobalState.All
            ? "All--tasks"
            : context?.GlobalState.Completed
            ? "comp--tasks"
            : "not--comp"
        }
      >
        {context?.state.map((s) => {
          return (
            <li
              className={`todo-tasks ${
                s.isCompleted && context.GlobalState.Completed
                  ? "show--comp"
                  : !s.isCompleted && context.GlobalState.NotCompleted
                  ? "show--none"
                  : "hide--comp"
              }`}
              key={s.id}
              id={s.id}
            >
              <div className="top--section">
                <p>{s.todo}</p>
                <ButtonComp id={s.id} isOpen={s.isOpen} />
              </div>
              <Status isCompleted={s.isCompleted} />
              {s.isOpen && <MidStatus id={s.id} isCompleted={s.isCompleted} />}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export { ListComp };
