import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Cont = styled.div`
  width: 200px;
`
const Id = styled.div`
  color: #fad;
`
const MsgCont = styled.div`
color:green;
`

const fakedb = [
  {
    id: 1,
    //username: 'name',
    message: 'fake msg',
    //  created: 'dec.1st 2000',
  },
]


const Message = ({ msgs, desc, status, imgurl }) => {
  return (
    <Container>
      {msgs.map((o) => (
        <Cont>
          {/* <Id>{o.id} </Id> <MsgCont>{o.message} </MsgCont> */}
          <Id>{desc}</Id> <img src={imgurl}/> <MsgCont>{status} </MsgCont>

        </Cont>
      ))}
    </Container>
  )
}

Message.defaultProps = {
    msgs:fakedb,
    desc:"desc"
}

export default Message
