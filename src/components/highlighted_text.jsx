import styled, { keyframes } from "styled-components";

const highlight = keyframes`
  from {
    background-size: 0% 10%
  }

  to {
    background-size: 100% 10%;
  }
`;

const HighlightedText = styled.span`
  background-image: linear-gradient(120deg, #0366d6, #f1f8ff);
  background-repeat: no-repeat;
  background-position: 0% 80%;
  background-size: 100% 10%;
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: both;
  animation-name: ${highlight};
  margin: 0;
`;

export default HighlightedText;
