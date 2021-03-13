import Buttons from 'comps/Buttons'
import Divider from 'comps/Divider'
import Inputs from 'comps/Inputs'
import LoginForm from 'comps/LoginForm'
import SignupForm from 'comps/SignupForm'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 490px;
  background-color: #9999;
  backdrop-filter: blur(100px);
  border-radius: 40px 40px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`
const TitleCont = styled.div`
  display: inline-flex;
  width: 210px;
  justify-content: space-between;
`
const SignupTab = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #a5a5a5;
  :hover {
    border-bottom: 4px solid #ff3e33;
    color: #fff;
  }
`
const LoginTab = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #a5a5a5;
  :hover {
    border-bottom: 4px solid #ff3e33;
    color: #fff;
  }
`

const MainForm = ({}) => {
  return (
    <Container>
      <TitleCont>
        <SignupTab>Sign up</SignupTab>
        <LoginTab>Login</LoginTab>
      </TitleCont>
      {/* <SignupForm/> */}
      <LoginForm/>

    </Container>
  )
}

MainForm.defaultProps = {}

export default MainForm




// import LandingForm from 'comps/LandingForm'
// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
//   background-color: #9999;
//   border-radius: 40px 40px 0px 0px;
//   backdrop-filter: blur(100px);
//   width: 100%;
//   height: 384px;
// `


// const MainForm = ({}) => {
//   return (
//     <Container>
//         <LandingForm/>
//     </Container>
//   )
// }

// MainForm.defaultProps = {}

// export default MainForm
