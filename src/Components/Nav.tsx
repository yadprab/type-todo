import React, { useContext } from "react";
import LogoLight from "../images/logolight.png";
import LogoDark from "../images/logodark.png";
import { dataContext } from "./dataContext";
import { motion } from "framer-motion";
function Nav() {
  const context = useContext(dataContext);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <nav>
          <img
            src={context?.GlobalState.themeState ? LogoLight : LogoDark}
            alt="illustration"
          />
        </nav>
      </motion.div>
    </>
  );
}

export { Nav };
