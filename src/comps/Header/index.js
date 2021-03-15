import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
text-align:center;
& > div{
/* align-items:center; */
/* margin:auto; */
`

const Title = styled.div`
font-size:24px;
font-weight:700;
color:#fff;

}

`
const State = styled.div`
font-size:15px;
color:#616161;
`

const Header = ({ title, state }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <State>{state}</State>
    </Container>
  )
}

Header.defaultProps = {
  title: 'title..',
  state: 'Add ..',
}

export default Header
