import React, { useState } from 'react'
import styled from 'styled-components'
import AppBackImage from 'comps/AppBackImage'
import TipsForm from 'comps/TipsForm'
import SmallBtn from 'comps/Buttons/SmallBtn'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
`
const BtnCont = styled.div`
  margin: 40px 0 0 20px;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`

const FeedPage = ({}) => {
  return (
    <Container>
      <AppBackImage src='images/img2.png' />

      <Link to='/MainPage'>
        <BtnCont>
        <SmallBtn icon='icons/icon8.png' />
        </BtnCont>
      </Link>


      <TipsForm />
    </Container>
  )
}

FeedPage.defaultProps = {}

export default FeedPage
