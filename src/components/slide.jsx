import React from "react";
import { Slide as BaseSlide } from "spectacle";
import Topo from "../static/topography.svg";

const Slide = ({ children }) => (
  <BaseSlide bgImage={Topo}>{children}</BaseSlide>
);

export default Slide;
