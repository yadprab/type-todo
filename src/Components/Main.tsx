import React, { useContext } from "react";
import { dataContext } from "./dataContext";
import { ListComp } from "./ListComp";
import { LowerTab } from "./LowerTab";
import { MiddleComp } from "./MiddleComp";
import Modal from "./Modal";
import { Nav } from "./Nav";
import { AnimatePresence } from "framer-motion";

const Main: React.FC = () => {
  const context = useContext(dataContext);
  return (
    <>
      <div className="main--wrapper">
        <main className="main--comp">
          <Nav />
          <AnimatePresence exitBeforeEnter>
            {!context?.GlobalState.startTasks &&
            !context?.GlobalState.addTask ? (
              <div className="animate--wrap">
                <MiddleComp />
              </div>
            ) : (
              ""
            )}
          </AnimatePresence>

          <LowerTab />
          <AnimatePresence exitBeforeEnter>
            {context?.GlobalState.startTasks && (
              <div className="mod-ani--wrapper">
                <Modal />
              </div>
            )}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            {context?.GlobalState.addTask && <ListComp />}
          </AnimatePresence>

          <LowerTab />
        </main>
      </div>
    </>
  );
};

export { Main };
