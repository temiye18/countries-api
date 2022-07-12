import React from "react";
import Container from "./Container.styled";
import styled from "styled-components";

const Heading = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  //   height: 100vh;
  font-size: 3rem;
`;

const Loading = () => {
  return (
    <Container>
      <Heading>Loading....</Heading>
    </Container>
  );
};

export default Loading;
