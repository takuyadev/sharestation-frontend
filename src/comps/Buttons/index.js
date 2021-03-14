import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const BtnCont = styled.button`
  width: 314px;
  padding-right: 30px;
  height: 46px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 8px;
  border: ${(props) => (props.border ? props.border : 'none')};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#fff')};
  color: ${(props) => (props.color ? props.color : '#111')};
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.hvcolor ? props.hvcolor : '#e0e0eb')};
    transition-duration: 0.5s;
  }
`

const IconCont = styled.img`
  width: 20px;
  margin-right: 10px;
`

const Buttons = ({
  // width,
  // height,
  icon,
  text,
  border,
  bgcolor,
  color,
  hvcolor,
  onClick,
  name
}) => {
  return (
    <Container onClick={() => {onClick(name)}}>
      <BtnCont
        bgcolor={bgcolor}
        border={border}
        color={color}
        hvcolor={hvcolor}
        // width={width}
        // height={height}
      >
        <IconCont src={icon} />
        {text}
      </BtnCont>
    </Container>
  )
}

Buttons.defaultProps = {
  icon: null,
  text: null,
  border: null,
  bgcolor: null,
  onClick: () => {},
}

export default Buttons
