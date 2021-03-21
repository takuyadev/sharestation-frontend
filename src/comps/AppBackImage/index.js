import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Test = styled.img`
  width: 100%;
  height: auto;
  object-fit: fill;
  position: fixed;
  top: 0;
  z-index: -1;
`

const AppBackImage = ({ src }) => {
  return (
    <Container>
      <Test src={src} />
    </Container>
  )
}

AppBackImage.defaultProps = {}

export default AppBackImage
