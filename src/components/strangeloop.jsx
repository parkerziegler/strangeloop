import React from "react";
import { Image } from "spectacle";

import StrangeLoopLogo from "../static/strangeloop.jpg";

import Flex from "./flex";

const StrangeLoop = () => (
  <Flex.FlexVerticalEvenly style={{ alignItems: "center" }}>
    <Image src={StrangeLoopLogo} width={200} style={{ margin: 0 }} />
    <span>Parker Ziegler</span>
    <span>September 13, 2019</span>
  </Flex.FlexVerticalEvenly>
);

export default StrangeLoop;
