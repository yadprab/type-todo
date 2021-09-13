import React, { useContext } from "react";
import ImageLight from "../images/ImageLight.png";
import ImageDark from "../images/ImageDark.png";
import { dataContext } from "./dataContext";
function ImageComp() {
  const context = useContext(dataContext);
  return (
    <>
      <div className="image--component">
        <img
          src={context?.GlobalState.themeState ? ImageLight : ImageDark}
          alt="illustration"
        />
      </div>
    </>
  );
}

export { ImageComp };
