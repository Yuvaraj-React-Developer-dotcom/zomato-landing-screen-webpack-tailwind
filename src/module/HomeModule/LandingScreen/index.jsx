import React, { useState } from "react";
import LayoutOne from "../../../components/LayoutOne";
import LayoutTwo from "../../../components/LayoutTwo";
import { data } from "./data";
import LayoutThree from "../../../components/LayoutThree";
import LayoutFour from "../../../components/LayoutFour";
import LayoutFive from "../../../components/LayoutFive";
const LandindScreen = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  return (
    <div>
      <LayoutOne />
      {data?.map((item) => {
        if (item?.order != "first" && windowSize > 1024) {
          return (
            <>
              <LayoutThree item={item} />
            </>
          );
        } else {
          return (
            <>
              <LayoutTwo item={item} />
            </>
          );
        }
      })}
      <LayoutFour />
      <LayoutFive />
    </div>
  );
};

export default LandindScreen;
