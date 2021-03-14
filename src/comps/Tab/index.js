import Buttons from 'comps/Buttons'
import Divider from 'comps/Divider'
import Inputs from 'comps/Inputs'
import LoginForm from 'comps/LoginForm'
import SignupForm from 'comps/SignupForm'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #a5a5a5;
  :hover {
    border-bottom: 4px solid #ff3e33;
    color: #fff;
  }
`

const Tab = ({ text, onTabClick, name}) => {
  return (
    <Container
      onClick={() => {
        onTabClick(name)
      }}
    >
      {text}
    </Container>
  )
}

Tab.defaultProps = {
    onTabClick: () => {},
}

export default Tab
