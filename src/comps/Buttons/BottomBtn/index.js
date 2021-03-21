import React from 'react'
import styled from 'styled-components'

const BtnCont = styled.button`
  background-color: #6524ff;
  border: none;
  width: 100%;
  height: 80px;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
`
const BottomBtn = ({ BtnText, onClick }) => {
  return (
    <BtnCont
      onClick={() => {
        onClick()
      }}
    >
      {BtnText}
    </BtnCont>
  )
}

BottomBtn.defaultProps = {
  onClick: () => {},
  BtnText: null,
}

export default BottomBtn
