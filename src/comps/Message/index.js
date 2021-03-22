import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Cont = styled.div`
  width: 200px;
`
const Desc = styled.div`
  color: #fad;
  font-weight: bold;
  font-size: 25px;
`

const fakedb = [
  {
    imgurl: 'fake msg',
    desc: 1,
  },
]

const Message = ({ msgs, desc, imgurl }) => {
  return (
    <Container>
      {msgs.map((o) => (
        <Cont>
           <img src={o.imgurl} /><Desc>{o.desc} </Desc>
          {/* <Desc>{desc}</Desc> <img src={imgurl}/>  */}
        </Cont>
      ))}
    </Container>
  )
}

Message.defaultProps = {
  msgs: fakedb,
}

export default Message
