import React, {useState} from 'react'
import styled from 'styled-components'
import Divider from 'comps/Divider'
import Inputs from 'comps/Inputs'
import BasicBtn from 'comps/Buttons/BasicBtn'

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction:column;
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

const LoginForm = ({ display, onBtnClick, name }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

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
      </InputCont>
      <BtnCont>
        <BasicBtn
          text='Login'
          bgcolor='#6524FF'
          color='#fff'
          hvcolor='#5200cc'
          onClick={() => {
            onBtnClick(name, email, pass)
          }}
        />
        <Divider />
        <BasicBtn icon='icons/icon2.png' text='Continue with Facebook' />
      </BtnCont>
    </Container>
  )
}

LoginForm.defaultProps = {
  onBtnClick: () => {},
}

export default LoginForm
