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

const FlexVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexVerticalBetween = styled(FlexVertical)`
  justify-content: space-between;
`;

const FlexVerticalEvenly = styled(FlexVertical)`
  justify-content: space-evenly;
`;

export default {
  FlexHorizontal,
  FlexHorizontalBetween,
  FlexHorizontalEvenly,
  FlexVertical,
  FlexVerticalBetween,
  FlexVerticalEvenly
};
