// import { Input } from '@styled-icons/material'
import Divider from 'comps/Divider'
import React from 'react'
import styled from 'styled-components'
import Buttons from 'comps/Buttons'
import LandingForm from 'comps/LandingForm'
import LoginForm from 'comps/LoginForm'
import SignupForm from 'comps/SignupForm'
import Inputs from 'comps/Inputs'
import MainForm from 'comps/MainForm'
import Tab from 'comps/Tab'
import AppBackImage from 'comps/AppBackImage'
import appimg from 'comps/AppBackImage/img1.png'

// const Container = styled.div``

const MainPage = () => {



  return (
    <div className='main'>
      <AppBackImage src={appimg} />    
    </div>
  )
}

export default MainPage
