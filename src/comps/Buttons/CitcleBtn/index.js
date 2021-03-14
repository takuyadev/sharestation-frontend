import React from 'react'
import styled from 'styled-components'

const BtnCont = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: transparent;
  backdrop-filter: blur(15px);
  /* position:relative;
  bottom:0; */
`
const IconCont = styled.img``

const CitcleBtn = ({ icon, onClick, btnname }) => {
  return (
    <BtnCont
      onClick={() => {
        onClick()
      }}
      name={btnname}
    >
      <IconCont src={icon} />
    </BtnCont>
  )
}

CitcleBtn.defaultProps = {
  onClick: () => {},
}

export default CitcleBtn
