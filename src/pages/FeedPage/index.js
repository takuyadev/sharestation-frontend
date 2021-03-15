import React, { useState } from 'react'
import styled from 'styled-components'
import AppBackImage from 'comps/AppBackImage'
import TipsForm from 'comps/TipsForm'

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
`

const FeedPage = ({}) => {
  return (
    <Container>
      <AppBackImage src='images/img2.png' />
      <TipsForm />
    </Container>
  )
}

FeedPage.defaultProps = {}

export default FeedPage
