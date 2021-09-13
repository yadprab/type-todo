import React, { useContext } from "react";
import { dataContext } from "./dataContext";
import { LowerTab } from "./LowerTab";
import { MiddleComp } from "./MiddleComp";
import Modal from "./Modal";
import { Nav } from "./Nav";

const Main: React.FC = () => {
  const context = useContext(dataContext);
  return (
    <>
      <div className="main--wrapper">
        <main className="main--comp">
          <Nav />
          {!context?.GlobalState.startTasks && <MiddleComp />}
          <LowerTab />
          {context?.GlobalState.startTasks && <Modal />}
          <LowerTab />
        </main>
      </div>
    </>
  );
};

export { Main };
