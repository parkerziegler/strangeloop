import React from "react";
import styled from "styled-components";

const Gradient = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${props =>
    `linear-gradient(0.25turn, #7b16ff, ${props.hex})`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 1rem;
`;

const Content = styled.div`
  min-width: 0;
  min-height: 0;
  height: 100%;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: center;
  padding: 4rem;
  flex: 1;
`;

const Layout = ({ direction = "column", style, hex = "#ff9c0d", children }) => (
  <Gradient hex={hex}>
    <Content direction={direction} style={style}>
      {children}
    </Content>
  </Gradient>
);

export default Layout;
