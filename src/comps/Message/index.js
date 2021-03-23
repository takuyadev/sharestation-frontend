import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Cont = styled.div`
  width: 200px;
`;
const Desc = styled.div`
  color: #fad;
  font-weight: bold;
  font-size: 25px;
`;

// const fakedb = [
//   {
//     photo_url: "fake msg",
//     description: 1,
//   },
// ];

const Message = ({ msgs, desc, imgurl }) => {
  return (
    <Container>
      <Cont>
        <img src={imgurl} />
        {/* <Desc>{o.description} </Desc>
        <Desc>{desc}</Desc> <img src={imgurl} /> */}
      </Cont>
    </Container>
  );
};

Message.defaultProps = {
  // msgs: fakedb,
  imgurl: "images/img1.png"
};

export default Message;
