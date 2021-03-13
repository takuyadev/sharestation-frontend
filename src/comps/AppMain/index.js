import LandingForm from 'comps/LandingForm'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100%;
height:100%;
  /* background-color: #9999; */
  /* background-image: url(imgs/bg21.jpg); */
  
`


const AppMain = ({}) => {
  return (
    <Container>
        <img src="images/img1.png" />
    </Container>
  )
}

AppMain.defaultProps = {}

export default AppMain
