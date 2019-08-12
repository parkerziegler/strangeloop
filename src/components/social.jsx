import React from "react";
import styled from "styled-components";
import { Image, Text } from "spectacle";

import Flex from "./flex";
import Twitter from "../static/Twitter_Logo_Blue.svg";
import GitHub from "../static/GitHub-Mark-120px-plus.png";

const Brand = styled(Text)`
  font-size: 2rem !important;
`;

const Social = () => (
  <Flex.FlexHorizontalEvenly style={{ width: "100%" }}>
    <Flex.FlexHorizontal>
      <Image src={Twitter} height={50} width={50} />
      <Brand>@parker_ziegler</Brand>
    </Flex.FlexHorizontal>
    <Flex.FlexHorizontal>
      <Image src={GitHub} height={40} width={40} style={{ marginRight: 5 }} />
      <Brand>parkerziegler</Brand>
    </Flex.FlexHorizontal>
  </Flex.FlexHorizontalEvenly>
);

export default Social;
