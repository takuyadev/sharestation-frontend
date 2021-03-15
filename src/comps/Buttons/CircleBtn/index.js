import React from 'react'
import styled from 'styled-components'

const BtnCont = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: transparent;
  background-color: #111;
  opacity: 0.5;
  backdrop-filter: blur(20px);
  :hover {
    opacity: 1;
  }
`
const Icon = styled.img``

const CircleBtn = ({ icon, onClick, btnname }) => {
  return (
    <BtnCont
      onClick={() => {
        onClick()
      }}
      name={btnname}
    >
      <Icon src={icon} />
    </BtnCont>
  )
}

CircleBtn.defaultProps = {
  onClick: () => {},
}

export default CircleBtn
