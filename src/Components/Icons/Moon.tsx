import React from "react";
import {motion} from 'framer-motion'
import { IconWrap } from "../variants";
const Moon = () => {
  return (
    <motion.div className="moon--icon" variants={IconWrap} initial='initial' animate='visible' exit='exit'>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8886 8.58225L14.8025 9.02253L16.2314 10.6049L16.0055 12.725L17.952 11.855L19.8986 12.725L19.6726 10.6049L21.1016 9.02253L19.0154 8.58225L17.952 6.73425L16.8886 8.58225Z"
          fill="#383D4B"
        />
        <path
          d="M23.2088 17.1786L21.8422 16.8901L21.1455 15.6793L20.4488 16.8901L19.0822 17.1786L20.0183 18.2153L19.8703 19.6041L21.1455 19.0342L22.4209 19.6041L22.2727 18.2152L23.2088 17.1786Z"
          fill="#383D4B"
        />
        <path
          d="M11.4989 12C11.4989 7.29669 14.2051 3.22613 18.145 1.25855C16.5332 0.453626 14.7153 0 12.7912 0C6.16377 0 0.791199 5.37257 0.791199 12C0.791199 18.6274 6.16377 24 12.7912 24C14.7153 24 16.5332 23.5464 18.145 22.7415C14.2051 20.7739 11.4989 16.7033 11.4989 12Z"
          fill="#383D4B"
        />
      </svg>
    </motion.div>
  );
};
export { Moon };
