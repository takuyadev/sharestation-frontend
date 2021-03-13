import Buttons from 'comps/Buttons'
import Divider from 'comps/Divider'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #9999;
  border-radius: 40px 40px 0px 0px;
  backdrop-filter: blur(15px);
  width: 100%;
  height: 324px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  position:fixed;
  bottom:0;
`
const TitleCont = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  width: 140px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const LandingForm = ({}) => {
  return (
    <Container>
      <TitleCont>
        Share <br />
        Your Station
      </TitleCont>
      <Buttons icon='icons/icon2.png' text='Continue with Facebook' />
      <Buttons icon='icons/icon1.png' text='Continue with Email' />

      <Divider />

      <Buttons
        text='Sign up with Email'
        border='1.5px solid #fff'
        bgcolor='transparent'
        color='#fff'
        hvcolor='#9494b8'
      />
    </Container>
  )
}

LandingForm.defaultProps = {}

export default LandingForm
