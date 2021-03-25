import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoginForm from 'comps/LoginForm'
import SignupForm from 'comps/SignupForm'
import Tab from 'comps/Tab'
import { Link } from 'react-router-dom'
import SmallBtn from 'comps/Buttons/SmallBtn'

const Container = styled.div`
  width: 100%;
  height: 440px;
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
const BtnCont = styled.div`
  position: fixed;
  right: 10%;
  /* margin: 40px 0 0 20px; */
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`
const TabCont = styled.div`
  display: inline-flex;
  width: 210px;
  justify-content: space-between;
  z-index: 1;
`

const FormComp = ({ tab }) => {
  const [clickTab, setClickTab] = useState(null)
  // const [clickLoginTab, setClickLoginTab] = useState(null);

  useEffect(() => {
    setClickTab(tab)
  }, [tab])

  const HandleClickTab = (name) => {
    // alert('Signup Tab dd' + name)
    setClickTab(name)
  }
  const HandleBtnClick = (name, email, password, fullname) => {
    // alert('test btn click' + name)
    // setClickLoginTab(name);
    console.log(email, password, fullname)
  }

  return (
    <Container>
      <TabCont>
        <Tab
          onTabClick={HandleClickTab}
          name='Signup'
          text='Sign up'
          color={clickTab === 'Signup' ? '#fff' : '#a5a5a5'}
          border={clickTab === 'Signup' ? '4px solid #ff3e33' : 'none'}
        />
        <Tab
          onTabClick={HandleClickTab}
          name='Login'
          text='Login'
          color={clickTab === 'Login' ? '#fff' : '#a5a5a5'}
          border={clickTab === 'Login' ? '4px solid #ff3e33' : 'none'}
        />
      </TabCont>
      <Link to='/'>
        <BtnCont>
          <SmallBtn icon='icons/icon9.png' />
        </BtnCont>
      </Link>

      <SignupForm
        display={clickTab === 'Signup' ? 'display' : 'none'}
        name='Signup'
        onBtnClick={HandleBtnClick}
      />
      <LoginForm
        display={clickTab === 'Login' ? 'display' : 'none'}
        name='Login'
        onBtnClick={HandleBtnClick}
      />
    </Container>
  )
}

FormComp.defaultProps = {
  // onSignup: () => {},
  // onLogin: () => {},
  tab: 'Signup',
}

export default FormComp
