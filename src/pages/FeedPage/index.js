import React, { useState } from 'react'
import styled from 'styled-components'
import AppBackImage from 'comps/AppBackImage'
import CircleBtn from 'comps/Buttons/CircleBtn'
import TipsForm from 'comps/TipsForm'

const Container = styled.div`
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
`
const BackCont = styled.div``
const BtnCont = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 30px;
  margin: 0 20px;
  height: 230px;
  justify-content: space-between;
`
const TipCont = styled.div``

const FeedPage = ({}) => {

  // const [clickTipForm, setClickTipForm] = useState(null)

  // const HandleExpand = (name) => {
  //   // alert('Click expand'+name)
  //   setClickTipForm(name);
  // }

  return (
    <Container>
      <BackCont>
        <AppBackImage src='images/img2.png' />
      </BackCont>
      <BtnCont>
        <CircleBtn icon='icons/icon3.png' btnname='nextBtn' />
        <CircleBtn icon='icons/icon4.png' btnname='heartBtn' />
        <CircleBtn icon='icons/icon5.png' btnname='addBtn' />
      </BtnCont>
      <TipCont>
        <TipsForm 
        // onExpand={HandleExpand} 
        icon='icons/icon7.png'
        // name="expanded" 
        // expanded={clickTipForm === "expanded" ? "flex" : "none"}
        />
      </TipCont>
    </Container>
  )
}

FeedPage.defaultProps = {}

export default FeedPage
