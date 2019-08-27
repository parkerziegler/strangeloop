import React from "react";
import { Image } from "spectacle";

import Flex from "./flex";
import FormidableLogo from "../static/formidable_logo.svg";
import FormidableText from "../static/formidable_text.svg";

const Formidable = () => (
  <Flex.FlexHorizontalEvenly>
    <Image src={FormidableLogo} height={150} />
    <Image src={FormidableText} height={100} />
  </Flex.FlexHorizontalEvenly>
);

export default Formidable;
