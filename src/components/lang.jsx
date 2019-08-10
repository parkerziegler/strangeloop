import React from "react";
import styled from "styled-components";
import { Image, Text } from "spectacle";

const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    height: 30px;
  }
`;

const Lang = ({ src, text }) => (
  <Container>
    <Image src={src} />
    <Text>{text}</Text>
  </Container>
);

export default Lang;
