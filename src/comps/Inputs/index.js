import React from 'react'
import styled from 'styled-components'

const FormInput = styled.div``

const Test = styled.input`
width:314px;
height:40px;
border:none;
border-bottom:1.5px solid #ffff;
background-color:transparent;
color:#fff;
font-size:17px;
::placeholder {
    color: #ffff;
    font-size: 15px;
  }
`

const Inputs = ({ type, placeholder }) => {
  return (
    <FormInput
    >
      <Test
        type={type}
        placeholder={placeholder}
        // onChange={(e) => {
        //   setUsername(e.target.value);
        // }}
      />
    </FormInput>
  )
}

Inputs.defaultProps = {}

export default Inputs
