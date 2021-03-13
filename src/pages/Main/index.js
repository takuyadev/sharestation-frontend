import React from 'react'
import styled from 'styled-components'
import Buttons from '../../comps/Buttons'
import LandingForm from '../../comps/LandingForm'
import LoginForm from '../../comps/LoginForm'
import SignupForm from '../../comps/SignupForm'

// const Container = styled.div``

const Main = () => {
  return (
    <div className="main">
      <Buttons 
      icon='icons/icon2.png' 
      text='Continue with Facebook' />
      <Buttons 
      icon='icons/icon1.png' 
      text='Continue with Email' />
      <Buttons 
      text='Sign up with Email' 
      border="1.5px solid #fff"
      bgcolor="transparent"
      color="#fff"
      hvcolor="#9494b8"
      />
      <Buttons 
      text='Sign up' 
      bgcolor="#6524FF"
      color="#fff"
      hvcolor="#5200cc"
      />
      <Buttons 
      text='Login' 
      bgcolor="#6524FF"
      color="#fff"
      hvcolor="#5200cc"
      />
      <LandingForm />
      <LoginForm />
      <SignupForm />
    </div>
  )
}

export default Main
