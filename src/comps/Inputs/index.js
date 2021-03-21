import React, { useState } from 'react'
import styled from 'styled-components'

const FormInput = styled.div``

const Test = styled.input`
  width: 314px;
  ${(props) => props.height && 'height:' + props.height + ';'}
  border: none;
  border-bottom: 1.5px solid #ffff;
  background-color: transparent;
  color: #fff;
  font-size: 17px;
  ::placeholder {
    color: #ffff;
    font-size: 15px;
    height: 200px;
  }
`

const Inputs = ({ type, placeholder, onChange, height }) => {
  return (
    <FormInput>
      <Test
        type={type}
        placeholder={placeholder}
        height={height}
        onChange={onChange}
      />
    </FormInput>
  )
}

Inputs.defaultProps = {}

export default Inputs
