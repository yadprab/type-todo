import React from "react";
import { ImageComp } from "./ImageComp";
import { motion } from "framer-motion";
import { wrap } from "./variants";
function MiddleComp() {
  return (
    <>
      <motion.div
        className="middle--comp"
        variants={wrap}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <ImageComp />
        <motion.p
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ delay: 0.1, duration: 1.5 }}
        >
          Its a great day to be here, Start a day with fresh tasks
        </motion.p>
      </motion.div>
    </>
  );
}

export { MiddleComp };
