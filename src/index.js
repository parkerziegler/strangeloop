import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";
import { createGlobalStyle } from "styled-components";

import Presentation from "./presentation";

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

const SpectacleOverride = createGlobalStyle`
  .spectacle-content {
    height: 85%;
    max-width: 75% !important;
  }
`;

const SpectacleCodeSlideOverride = createGlobalStyle`
  .spectacle-slide {
    h1 {
      font-size: 2.5rem !important;
      color: black !important;
    }
  }
`;

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <>
      <SpectacleOverride />
      <SpectacleCodeSlideOverride />
      <Presentation />
    </>
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./presentation", () => {
    const NextPresentation = require("./presentation").default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <>
          <SpectacleOverride />
          <NextPresentation />
        </>
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
