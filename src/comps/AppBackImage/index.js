import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #999;
  position:relative;
  z-index: -1;
`;
const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: fill;
  position: fixed;
  top: 0;
`;

const AppBackImage = ({ src }) => {
  return (
    <Container>
      <Img src={src} />
    </Container>
  );
};

AppBackImage.defaultProps = {
  src: "images/img2.png",
};

export default AppBackImage;
