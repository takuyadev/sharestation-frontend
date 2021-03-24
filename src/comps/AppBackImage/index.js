import React from "react";
import styled from "styled-components";

const Container = styled.div`
 /* width: 100%; 
   height: 100%; */

  background-color: #111;
  height:700px;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;
const Img = styled.img`
padding-bottom:200px;
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
