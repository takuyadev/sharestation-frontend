import Buttons from 'comps/Buttons'
import Divider from 'comps/Divider'
import Inputs from 'comps/Inputs'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  ${(props) => props.display && 'display:' + props.display + ';'}
`

const InputCont = styled.div`
  & > div {
    margin: 30px 0;
  }
`
const BtnCont = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SignupForm = ({ display }) => {
  return (
    <Container display={display}>
      <InputCont>
        <Inputs type='text' placeholder='Email' />
        <Inputs type='password' placeholder='Password' />
        <Inputs type='test' placeholder='Full Name' />
      </InputCont>
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
