import React from "react";
import { Heading, Image, Appear } from "spectacle";

import Flex from "./flex";
import UrqlLogo from "../static/urql_logo.png";
import SpectacleLogo from "../static/spectacle_logo.png";
import VictoryLogo from "../static/victory_logo.png";
import RunPkgLogo from "../static/runpkg_logo.png";

const OSS = () => (
  <Flex.FlexVerticalEvenly>
    <Heading size={4} style={{ marginBottom: 20 }}>
      Open Source
    </Heading>
    <Flex.FlexHorizontalEvenly>
      <Appear>
        <Image src={SpectacleLogo} height={150} />
      </Appear>
      <Appear>
        <Image src={VictoryLogo} height={150} />
      </Appear>
      <Appear>
        <Image src={UrqlLogo} height={150} />
      </Appear>
      <Appear>
        <Image src={RunPkgLogo} height={150} />
      </Appear>
    </Flex.FlexHorizontalEvenly>
  </Flex.FlexVerticalEvenly>
);

export default OSS;
