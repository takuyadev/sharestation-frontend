import React, { useState } from 'react'
import styled from 'styled-components'
import LoginForm from 'comps/LoginForm'
import SignupForm from 'comps/SignupForm'
import Tab from 'comps/Tab'
import AppBackImage from 'comps/AppBackImage'
import AddBtn from 'comps/Buttons/CitcleBtn'
import HeartBtn from 'comps/Buttons/HeartBtn'
import NextBtn from 'comps/Buttons/NextBtn'
import CitcleBtn from 'comps/Buttons/CitcleBtn'

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */
`
const Zz = styled.div`
  z-index: -1;
`
const BtnCont = styled.div`
display:flex;
flex-direction:column;
height:200px;
/* background-color:#dad; */
justify-content:space-between;
`

const FeedPage = ({}) => {
  return (
    <Container>
      <Zz>
        <AppBackImage src='images/img2.png' />
      </Zz>
      <BtnCont>
        <CitcleBtn icon='icons/icon3.png' btnname="nextBtn"/>
        <CitcleBtn icon='icons/icon4.png' btnname="heartBtn"/>
        <CitcleBtn icon='icons/icon5.png' btnname="addBtn"/>
      </BtnCont>
    </Container>
  )
}

FeedPage.defaultProps = {}

export default FeedPage
