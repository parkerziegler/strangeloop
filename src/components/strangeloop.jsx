import React from "react";
import styled from "styled-components";

import Flex from "./flex";

const StrangeLoopLogo = styled.span`
  span {
    color: #d0e9ae;
    letter-spacing: -0.15em;
    margin-right: 0.1em;
  }
`;

const StrangeLoop = () => (
  <Flex.FlexHorizontalBetween style={{ width: "100%" }}>
    <StrangeLoopLogo>
      Strange L<span>oo</span>P
    </StrangeLoopLogo>
    <span>September 13, 2019</span>
  </Flex.FlexHorizontalBetween>
);

export default StrangeLoop;
