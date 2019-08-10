import React from "react";
import styled from "styled-components";

const Gradient = styled.div`
  height: 80vh;
  width: 100%;
  background-image: ${props =>
    `linear-gradient(0.25turn, #7b16ff, ${props.hex})`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Content = styled.div`
  height: 96%;
  width: 97%;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  align-items: center;
  justify-content: center;
`;

const Layout = ({ direction, style, hex, children }) => (
  <Gradient hex={hex}>
    <Content direction={direction} style={style}>
      {children}
    </Content>
  </Gradient>
);

export default Layout;
