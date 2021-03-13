import React from 'react'
import styled from 'styled-components'
import appimg from 'comps/AppMain/img1.png'

const Container = styled.div``
const Test = styled.img`
 width: 100%;
  height: auto;
  object-fit: fill;
  /* object-fit: cover;
  object-fit: contain; */
`

const AppMain = ({src}) => {
  return (
    <Container>
      <Test src={src}/>
    </Container>
  )
}

AppMain.defaultProps = {}

export default AppMain
