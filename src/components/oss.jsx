import React from "react";
import { Heading, Image } from "spectacle";

import Grid from "./grid";
import UrqlLogo from "../static/urql_logo.png";
import SpectacleLogo from "../static/spectacle_logo.png";
import VictoryLogo from "../static/victory_logo.png";
import RunPkgLogo from "../static/runpkg_logo.png";

const OSS = () => (
  <>
    <Heading size={4}>Open Source</Heading>
    <Grid.GridTwoByTwoEven>
      <Image src={SpectacleLogo} height={150} />
      <Image src={VictoryLogo} height={150} />
      <Image src={UrqlLogo} height={150} />
      <Image src={RunPkgLogo} height={150} />
    </Grid.GridTwoByTwoEven>
  </>
);

export default OSS;
