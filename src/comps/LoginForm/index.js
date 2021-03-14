import Buttons from 'comps/Buttons'
import Divider from 'comps/Divider'
import Inputs from 'comps/Inputs'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 550px;
  display:flex;
  /* display: ${(props) => (props.display ? props.display : "none")}; */
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

const LoginForm = ({display}) => {
  return (
    <Container display={display}>
      <InputCont>
        <Inputs type='text' placeholder='Email' />
        <Inputs type='password' placeholder='Password' />
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

LoginForm.defaultProps = {}

export default LoginForm
