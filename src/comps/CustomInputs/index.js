import React from 'react'
import styled from 'styled-components'

const FormInput = styled.div``

const Input = styled.input`


  display: inline-block;
  background-color:#e3e3e3;
  /* border: 1px solid #999; */
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
  
:hover::before{
    border-color: black;
}
`

const Test = styled.input``

const CustomInputs = ({ type, value, height }) => {
  return (
    <FormInput>
      <Input type={type} value={value}/>

    </FormInput>
  )
}

CustomInputs.defaultProps = {}

export default CustomInputs