import React from 'react'
import styled from 'styled-components'

const FormInput = styled.div``

const Test = styled.input`
width:314px;
height:40px;
border-bottom:1.5px solid #ffff;
border-top:none;
border-left:none;
border-right:none;
background-color:transparent;
::placeholder {
    color: #ffff;
    font-size: 15px;


    /* opacity: 4; */
    /* font-weight:bold; */
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
