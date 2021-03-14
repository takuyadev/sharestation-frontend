import React, { useState } from 'react'
import styled from 'styled-components'
import LoginForm from 'comps/LoginForm'
import SignupForm from 'comps/SignupForm'
import Tab from 'comps/Tab'
import AppBackImage from 'comps/AppBackImage'
import CircleBtn from 'comps/Buttons/CircleBtn'
import TipsForm from 'comps/TipsForm'
import Avatar from 'comps/Avatar'
import DropdownBtn from 'comps/Buttons/DropdownBtn'

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */
`
const BackCont = styled.div`
  /* z-index: -1; */
`
const BtnCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  /* background-color:#dad; */
  justify-content: space-between;
`
const TipCont = styled.div``

const FeedPage = ({}) => {
  return (
    <Container>
      <BackCont>
        <AppBackImage src='images/img2.png' />
      </BackCont>
      <BtnCont>
        <CircleBtn icon='icons/icon3.png' btnname='nextBtn' />
        <CircleBtn icon='icons/icon4.png' btnname='heartBtn' />
        <CircleBtn icon='icons/icon5.png' btnname='addBtn' />
      </BtnCont>
      <TipCont>
        {/* <DropdownBtn icon='icons/icon7.png' /> */}
        <TipsForm />
      </TipCont>
    </Container>
  )
}

FeedPage.defaultProps = {}

export default FeedPage
