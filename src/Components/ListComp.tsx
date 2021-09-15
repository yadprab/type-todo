import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useContext } from "react";
import { ButtonComp } from "./ButtonComp";
import { dataContext } from "./dataContext";
import { MidStatus } from "./MidStatus";
import { Status } from "./Status";
import { container, Item, deleteAni } from "./variants";

function ListComp() {
  const context = useContext(dataContext);

  return (
    <>
      <motion.ul
        variants={container}
        initial="initial"
        animate="visible"
        exit="exit"
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
            <AnimateSharedLayout key={s.id}>
              <motion.li
                variants={s.isDelete ? deleteAni : Item}
                className={`todo-tasks ${
                  s.isCompleted && context.GlobalState.Completed
                    ? "show--comp"
                    : !s.isCompleted && context.GlobalState.NotCompleted
                    ? "show--none"
                    : "hide--comp"
                }`}
                id={s.id}
              >
                <div className="top--section">
                  <p>{s.todo}</p>
                  <ButtonComp id={s.id} isOpen={s.isOpen} />
                </div>
                <Status isCompleted={s.isCompleted} />
                <AnimatePresence>
                  {s.isOpen && (
                    <MidStatus id={s.id} isCompleted={s.isCompleted} />
                  )}
                </AnimatePresence>
              </motion.li>
            </AnimateSharedLayout>
          );
        })}
      </motion.ul>
    </>
  );
}

export { ListComp };
