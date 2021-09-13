import React, { useContext } from "react";
import LogoLight from "../images/logolight.png";
import LogoDark from "../images/logodark.png";
import { dataContext } from "./dataContext";
function Nav() {
  const context = useContext(dataContext);
  return (
    <>
      <nav>
        <img
          src={context?.GlobalState.themeState ? LogoLight : LogoDark}
          alt="illustration"
        />
      </nav>
    </>
  );
}

export { Nav };
