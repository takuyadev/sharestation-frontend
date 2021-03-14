import React, { useState } from 'react'
import styled from 'styled-components'
import LoginForm from 'comps/LoginForm'
import SignupForm from 'comps/SignupForm'
import Tab from 'comps/Tab'

const Container = styled.div`
  width: 100%;
  height: 490px;
  background-color: #9999;
  backdrop-filter: blur(15px);
  border-radius: 40px 40px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  position: fixed;
  bottom: 0;
`
const TabCont = styled.div`
  display: inline-flex;
  width: 210px;
  justify-content: space-between;
  z-index: 1;
`

const Form = ({}) => {
  const [clickTab, setClickTab] = useState(null)
  // const [clickLoginTab, setClickLoginTab] = useState(null);

  const HandleClickTab = (name) => {
    // alert('Signup Tab dd' + name)
    setClickTab(name)
  }
  const HandleBtnClick = (name, email, pass, fullname) => {
    // alert('test btn click' + name)
    // setClickLoginTab(name);
    console.log(email, pass, fullname);
  }

  return (
    <Container>
      <TabCont>
        <Tab onTabClick={HandleClickTab} name='Signup' text='Sign up' 
        color={clickTab === 'Signup' ? '#fff' : '#a5a5a5'}
        border={clickTab === 'Signup' ? '4px solid #ff3e33' : 'none'}
        />
        <Tab onTabClick={HandleClickTab} name='Login' text='Login' 
        color={clickTab === 'Login' ? '#fff' : '#a5a5a5'}
        border={clickTab === 'Login' ? '4px solid #ff3e33' : 'none'}
        />
      </TabCont>

      <SignupForm
        display={clickTab === 'Signup' ? 'display' : 'none'}
        name='Signup'
        onBtnClick={HandleBtnClick}
      />
      <LoginForm display={clickTab === 'Login' ? 'display' : 'none'} 
       name='Login'
      onBtnClick={HandleBtnClick}/>
    </Container>
  )
}

Form.defaultProps = {
  // onSignup: () => {},
  // onLogin: () => {},
}

export default Form
