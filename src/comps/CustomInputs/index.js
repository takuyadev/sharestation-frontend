import React from 'react'
import styled from 'styled-components'

const FormInput = styled.div``

const Input = styled.input`
  display: inline-block;
  background-color: #e3e3e3;
  width:300px;
  /* height:30px; */
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
  :hover::before {
    border-color: black;
  }
`

const CustomInputs = ({ type, value, height, onChange }) => {
  return (
    <FormInput>
      <Input type={type} value={value} onChange={onChange} />
    </FormInput>
  )
}

CustomInputs.defaultProps = {}

export default CustomInputs
