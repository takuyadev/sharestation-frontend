import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* width: 314px;
  height: 46px; */
  /* display: flex;
  justify-content: center;
  align-items: center;  */
`
const BtnCont = styled.button`
  /* min-width: ${(props) => (props.width ? props.width : '300px')};
  min-height: ${(props) => (props.height ? props.height : '100px')};
  max-width: ${(props) => (props.width ? props.width : '50%')};
  max-height: ${(props) => (props.height ? props.height : '300px')};
  margin-right: 10px; */
  width: 314px;
  height: 46px;
  font-size: 15px;
  font-weight:400;
  border-radius: 8px;
  border: ${(props) => (props.border ? props.border : 'none')};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#fff')};
  color: ${(props) => (props.color ? props.color : '#111')};
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.hvcolor ? props.hvcolor : '#f0f0f5')};
    /* font-weight: bold; */
    transition-duration: 0.5s;
  }
`

const IconCont = styled.img`
  width: 20px;
  margin-right: 10px;
`

const Buttons = ({
  width,
  height,
  icon,
  text,
  border,
  bgcolor,
  color,
  hvcolor,
}) => {
  return (
    <Container>
      <BtnCont
        bgcolor={bgcolor}
        border={border}
        color={color}
        hvcolor={hvcolor}
        width={width}
        height={height}
      >
        <IconCont src={icon} />
        {text}
      </BtnCont>
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
