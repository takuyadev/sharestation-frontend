import React, {useState} from 'react'
import styled from 'styled-components'
import Buttons from 'comps/Buttons'
import Divider from 'comps/Divider'
import Inputs from 'comps/Inputs'

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

const SignupForm = ({ display, onBtnClick, name}) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [fullname, setFullname] = useState('')

  return (
    <Container display={display}>
      <InputCont>
        <Inputs type='text' placeholder='Email' 
        onChange={(e) => {
          setEmail(e.target.value);
        }}/>
        <Inputs type='password' placeholder='Password' 
        onChange={(e) => {
          setPass(e.target.value);
        }}/>
        <Inputs type='test' placeholder='Full Name' 
        onChange={(e) => {
          setFullname(e.target.value);
        }}/>
      </InputCont>
      <BtnCont >
        <Buttons
          text='Sign up'
          bgcolor='#6524FF'
          color='#fff'
          hvcolor='#5200cc'
          onClick={() => {
            onBtnClick(name, email, pass, fullname)
          }}
        />
        <Divider />
        <Buttons icon='icons/icon2.png' text='Continue with Facebook' />
      </BtnCont>
    </Container>
  )
}

SignupForm.defaultProps = {
  onBtnClick: () => {}
}

export default SignupForm
