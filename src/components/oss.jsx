import React from "react";
import { Heading, Image } from "spectacle";

import Grid from "./grid";
import UrqlLogo from "../static/urql_logo.png";
import SpectacleLogo from "../static/spectacle_logo.svg";
import VictoryLogo from "../static/victory_logo.png";
import RunPkgLogo from "../static/runpkg_logo.png";

const OSS = () => (
  <>
    <Heading size={4}>Open Source</Heading>
    <Grid.GridTwoByTwoEven>
      <Image src={SpectacleLogo} height={200} />
      <Image src={VictoryLogo} height={200} />
      <Image src={UrqlLogo} height={200} />
      <Image src={RunPkgLogo} height={200} />
    </Grid.GridTwoByTwoEven>
  </>
);

export default OSS;
