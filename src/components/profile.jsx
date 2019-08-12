import React from "react";
import styled from "styled-components";
import { Image } from "spectacle";

const Container = styled.div`
  height: 25vh;
  width: 25vh;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfilePicture = styled(Image)`
  height: 100%;
  width: auto;
  display: block;
  margin: 0 !important;
  object-fit: cover;
`;

const Profile = ({ src }) => (
  <Container>
    <ProfilePicture src={src} />
  </Container>
);

export default Profile;
