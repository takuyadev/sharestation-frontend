import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 40%;
  display: flex;
  margin: 0 auto;
`
const Cont = styled.div`
  & > img {
    width: 100%;
  }
`
const Desc = styled.div`
  color: #fad;
  font-weight: bold;
  font-size: 25px;
`

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
  )
}

Message.defaultProps = {
  imgurl: '',
}

export default Message
