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
  /* position:relative; */
`
const IconCont = styled.img``

const SmallBtn = ({ icon, onClick, btnname }) => {
  return (
    <BtnCont>
      <IconCont src={icon} />
    </BtnCont>
  )
}

SmallBtn.defaultProps = {
  onClick: () => {},
}

export default SmallBtn
