import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
color:#dad;
`
const MsgCont = styled.div`
color:#fff;
`
const Test = styled.div``
const Status = styled.div``

const fakedb = [
    {
      id:1,
    username:'fake',
    message:'fake stuff',
    created:'Dec.1st 2999'
    }
]


const Message = ({ msgs, desc, status, message }) => {
  return (
    <Container>
      {/* <Title>{title}</Title> */}
      {msgs.map(o=><MsgCont>
        {o.id} - {o.username} - {o.message} - {o.created}
      </MsgCont>)}
      {/* <Descrip>{desc}</Descrip> */}
      {/* <Test>{message}</Test> */}
      <Status>Name: "{status}"</Status>
    </Container>
  )
}

Message.defaultProps = {
    msgs:fakedb,
    desc:"desc"
}

export default Message
