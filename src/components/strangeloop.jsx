import React from "react";
import { Image } from "spectacle";

import StrangeLoopLogo from "../static/strangeloop.jpg";

import Flex from "./flex";

const StrangeLoop = () => (
  <Flex.FlexHorizontalEvenly style={{ width: "100%" }}>
    <Image src={StrangeLoopLogo} height={100} style={{ margin: 0 }} />
    <span>September 13, 2019</span>
  </Flex.FlexHorizontalEvenly>
);

export default StrangeLoop;
