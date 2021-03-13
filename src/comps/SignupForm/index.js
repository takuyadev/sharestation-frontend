import Buttons from 'comps/Buttons'
import Divider from 'comps/Divider'
import Inputs from 'comps/Inputs'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-color: #9999;
  backdrop-filter: blur(100px);
  border-radius: 40px 40px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  /* & > div {
    margin: 17px 0;
  } */
`
const TitleCont = styled.div`
  display: inline-flex;
  width: 200px;
  justify-content: space-between;
  /* & > div{
    margin-right:20px;
} */
`
const SignupTab = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #a5a5a5;
  :hover {
    border-bottom: 4px solid #ff3e33;
    color: #fff;
  }
`
const LoginTab = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #a5a5a5;
  :hover {
    border-bottom: 4px solid #ff3e33;
    color: #fff;
  }
`
const BtnCont = styled.div`
  /* height:200px;
  background-color:#dad; */
`

const SignupForm = ({}) => {
  return (
    <Container>
      <TitleCont>
        <SignupTab>Sign up</SignupTab>
        <LoginTab>Login</LoginTab>
      </TitleCont>

      <Inputs
      type="text"
      placeholder="Email"/>
      <Inputs
      type="password"
      placeholder="Password"/>


      <BtnCont>
        <Buttons
          text='Sign up'
          bgcolor='#6524FF'
          color='#fff'
          hvcolor='#5200cc'
        />
        <Divider />
        <Buttons icon='icons/icon2.png' text='Continue with Facebook' />
      </BtnCont>
    </Container>
  )
}

SignupForm.defaultProps = {}

export default SignupForm
