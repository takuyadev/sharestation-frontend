import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Divider from 'comps/Divider'
import Inputs from 'comps/Inputs'
import BasicBtn from 'comps/Buttons/BasicBtn'
import axios from 'axios'

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

//const token = null;
const LoginForm = ({ display, onBtnClick, name }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Auth = async () => {
    var resp2 = await axios.post(
      'https://sharestation.herokuapp.com/api/login',
      {
        email: email,
        password: password,
      });

    //token = resp2.data;
    axios.defaults.headers.common['Authorization'] = resp2.data;
    sessionStorage.setItem('token', resp2.data);

    console.log('identifier/token', resp2.data)
  }

  const Restricted = async() => {
    var resp = await axios.post('https://sharestation.herokuapp.com/api/login', {
    itemname:"item 1"
    })
    console.log('restricted', resp.data)
  }

  useEffect(() => {}, [])

  return (
    <Container display={display}>
      <InputCont>
        <Inputs
          type='text'
          placeholder='Email'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <Inputs
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </InputCont>
      <BtnCont>
        <BasicBtn
          text='Login'
          bgcolor='#6524FF'
          color='#fff'
          hvcolor='#5200cc'
          onClick={Auth}
        />
        <BasicBtn
          text='Restricted'
          bgcolor='#6524FF'
          color='#fff'
          hvcolor='#5200cc'
          onClick={Restricted}
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
