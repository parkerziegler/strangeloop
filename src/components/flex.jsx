import styled from "styled-components";

const FlexHorizontal = styled.div`
  display: flex;
  align-items: center;
`;

const FlexHorizontalBetween = styled(FlexHorizontal)`
  justify-content: space-between;
`;

const FlexHorizontalEvenly = styled(FlexHorizontal)`
  justify-content: space-evenly;
`;

export default {
  FlexHorizontalBetween,
  FlexHorizontalEvenly,
  FlexHorizontal
};
