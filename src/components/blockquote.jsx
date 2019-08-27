import styled from "styled-components";
import { BlockQuote as BaseBlockQuote } from "spectacle";

const BlockQuote = styled(BaseBlockQuote)`
  span {
    font-size: inherit !important;
    color: black !important;
    border-left: 5px solid #7b16ff;
    margin-bottom: 2rem;
  }

  cite {
    color: black !important;
  }
`;

export default BlockQuote;
