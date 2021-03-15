import React, { useState } from 'react'
import styled from 'styled-components'
import AppBackImage from 'comps/AppBackImage'
import TipsForm from 'comps/TipsForm'
import DropdownBtn from 'comps/Buttons/DropdownBtn'

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
`
const BtnCont = styled.div`
  margin: 30px 0 0 10px;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`

const FeedPage = ({}) => {
  return (
    <Container>
      <BtnCont>
        <DropdownBtn icon='icons/icon8.png' />
      </BtnCont>
      <AppBackImage src='images/img2.png' />
      <TipsForm />
    </Container>
  )
}

FeedPage.defaultProps = {}

export default FeedPage
