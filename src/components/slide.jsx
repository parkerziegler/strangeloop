import React from "react";
import { Slide as BaseSlide } from "spectacle";
import Topo from "../static/topography.svg";

const Slide = ({ children, ...rest }) => (
  <BaseSlide bgImage={Topo} {...rest}>
    {children}
  </BaseSlide>
);

export default Slide;
