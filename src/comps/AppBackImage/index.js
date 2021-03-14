import React from 'react'
import styled from 'styled-components'
import appimg from 'comps/AppBackImage/img1.png'

const Container = styled.div``
const Test = styled.img`
 width: 100%;
  height: auto;
  object-fit: fill;
  /* object-fit: cover;
  object-fit: contain; */
`

const AppBackImage = ({src}) => {
  return (
    <Container>
      <Test src={src}/>
    </Container>
  )
}

AppBackImage.defaultProps = {}

export default AppBackImage
