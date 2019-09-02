import React from "react";
import styled from "styled-components";

const MainPoint = styled.span`
  font-size: 1.5rem;
`;

const Point = styled.li`
  font-size: 1.5rem;
`;

const Notes = ({ main, points = [] }) => (
  <>
    <MainPoint>{main}</MainPoint>
    <ul>
      {points.map((point, i) => (
        <Point key={i}>{point}</Point>
      ))}
    </ul>
  </>
);

export default Notes;
