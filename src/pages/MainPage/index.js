import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AppBackImage from 'comps/AppBackImage'
import FormComp from 'comps/FormComp'
import LandingForm from 'comps/LandingForm'

const LFCont = styled.div`
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
`
const FormCont = styled.div`
  display: none;
  display: ${(props) => (props.expanded ? 'none' : 'flex')};
`

const MainPage = (expand) => {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(expand)
  }, [expand])

  return (
    <div className='main'>
      <AppBackImage src='images/img1.png' />
      {/* <Form/> */}

      <LFCont expanded={expanded}>
        <LandingForm
          onSignup={() => {
            setExpanded(!expanded)
          }}
          onLogin={() => {
            setExpanded(!expanded)
          }}
        />
      </LFCont>
      <FormCont expanded={expanded}>
        <FormComp />
      </FormCont>
    </div>
  )
}

export default MainPage
