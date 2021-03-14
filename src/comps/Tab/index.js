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
  /* color: #a5a5a5; */
  ${(props) => props.color && 'color:' + props.color + ';'}
  ${(props) => props.border && 'border-bottom:' + props.border + ';'}
  :hover {
    border-bottom: 4px solid #e60000;
    color: #fff;
  }
`

const Tab = ({ text, onTabClick, name, color, border }) => {
  return (
    <Container
      color={color}
      border={border}
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
