import React from "react";
import { Image } from "spectacle";

import Flex from "./flex";
import FormidableLogo from "../static/formidable_logo.svg";
import FormidableText from "../static/formidable_text.svg";

const Formidable = () => (
  <Flex.FlexHorizontalEvenly>
    <Image src={FormidableLogo} height={300} />
    <Image src={FormidableText} height={150} />
  </Flex.FlexHorizontalEvenly>
);

export default Formidable;
