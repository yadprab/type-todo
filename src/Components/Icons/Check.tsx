import { motion } from "framer-motion";
import React from "react";
import { IconAni } from "../variants";

const Check = () => {
  return (
    <>
      <motion.div className="check--icon">
        <motion.svg
          width={19}
          height={19}
          viewBox="0 0 19 19"
          fill="none"
          id="check"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={IconAni}
            initial="initial"
            animate="visible"
            d="M9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0ZM8.14287 13.6537L4.0303 9.54112L5.46974 8.10168L8.14284 10.7749L13.191 5.72672L14.6304 7.16615L8.14287 13.6537Z"
          />
        </motion.svg>
      </motion.div>
    </>
  );
};

export { Check };
