import React from 'react'
import styled from 'styled-components'

const BtnCont = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color:#dad; */
  /* position:relative;
  bottom:0; */
`
const IconCont = styled.img``

const DropdownBtn = ({ icon, onClick, btnname }) => {
  return (
    <BtnCont>
      <IconCont src={icon} />
    </BtnCont>
  )
}

DropdownBtn.defaultProps = {
  onClick: () => {},
}

export default DropdownBtn
