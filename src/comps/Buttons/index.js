import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  width: 314px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border-radius: 8px;
  border: ${(props) =>
    props.border ? props.border : 'none'};
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : '#fff'};
  color: ${(props) =>
    props.color ? props.color : '#111'};
  /* min-width: ${(props) =>
    props.width ? props.width : '300px'};
  min-height: ${(props) =>
    props.height ? props.height : '100px'};
  max-width: ${(props) =>
    props.width ? props.width : '50%'};
  max-height: ${(props) =>
    props.height ? props.height : '300px'}; */

  cursor: pointer;
  :hover {
      background-color:${(props) =>
    props.hvcolor ? props.hvcolor : '#f0f0f5'};
    /* font-weight: bold; */
    transition-duration: 0.5s;
  }
`
const IconCont = styled.img`
  width: 20px;
  margin-right: 10px;
`

const Buttons = ({
  icon,
  text,
  border,
  bgcolor,
  color,
  hvcolor
}) => {
  return (
    <Container
      bgcolor={bgcolor}
      border={border}
      color={color}
      hvcolor={hvcolor}
    >
      <IconCont src={icon} />
      {text}
    </Container>
  )
}

Buttons.defaultProps = {
  icon: null,
  text: 'continue...',
  border: null,
  bgcolor: null,
}

export default Buttons
