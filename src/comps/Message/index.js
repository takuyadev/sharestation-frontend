import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
color:#dad;
`
const MsgCont = styled.div`
color:#fff;
`

const fakedb = [
    {
      id:1,
    username:'fake',
    message:'fake stuff',
    created:'Dec.1st 2999'
    }
]


const Message = ({ msgs }) => {
  return (
    <Container>
      {/* <Title>{title}</Title> */}
      Messages
      {msgs.map(o=><MsgCont>
        {o.id} - {o.username} - {o.message} - {o.created}
      </MsgCont>)}
    </Container>
  )
}

Message.defaultProps = {
    msgs:fakedb
}

export default Message
