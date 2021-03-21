import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AppBackImage from 'comps/AppBackImage'
import FormComp from 'comps/FormComp'
import LandingForm from 'comps/LandingForm'
import { Link } from 'react-router-dom'
import SmallBtn from 'comps/Buttons/SmallBtn'

const LFCont = styled.div`
  display: ${(props) => (props.expanded ? 'flex' : 'none')};
`
const FormCont = styled.div`
  display: none;
  display: ${(props) => (props.expanded ? 'none' : 'flex')};
`
const Test = styled.div`
  margin: 40px 0 0 20px;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`
const BtnCont = styled.div`
  margin: 40px 0 0 20px;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
  /* z-index: 1; */
`

const MainPage = (expand) => {
  const [expanded, setExpanded] = useState(false)
  const [tab, setTab] = useState('Signup')

  useEffect(() => {
    setExpanded(expand)
  }, [expand])

  return (
    <div className='main'>
      <AppBackImage src='images/img1.png' 
      // style={{ zIndex: 0 }}
       />
      <Link to='/'>
        <BtnCont>
          <SmallBtn icon='icons/icon9.png' />
        </BtnCont>
      </Link>
      <LFCont expanded={expanded}>
        <LandingForm
          onSignup={() => {
            setExpanded(!expanded)
            setTab('Signup')
          }}
          onLogin={() => {
            setExpanded(!expanded)
            setTab('Login')
          }}
        />
      </LFCont>
      <FormCont expanded={expanded}>
        <FormComp tab={tab} />
      </FormCont>
    </div>
  )
}

export default MainPage
