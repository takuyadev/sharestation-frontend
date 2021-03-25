import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Divider from "comps/Divider";
import Inputs from "comps/Inputs";
import BasicBtn from "comps/Buttons/BasicBtn";
import { Link, useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  ${(props) => props.display && "display:" + props.display + ";"}
`;
const InputCont = styled.div`
  & > div {
    margin: 30px 0;
  }
`;
const BtnCont = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SignupForm = ({ display, onBtnClick, name }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [fullname, setFullname] = useState('')
  const Auth = async () => {
    console.log(email, password)
    var resp2 = await axios.post(
      "https://sharestation.herokuapp.com/api/signup",
      {
        email: email,
        password: password,
      }
    );
    //token = resp2.data;
    console.log(resp2)
    axios.defaults.headers.common["Authorization"] = resp2.data.accessToken;
    sessionStorage.setItem("token", resp2.data.accessToken);
    sessionStorage.setItem("id", resp2.data.id);
    history.push("/FeedPage");
    console.log("identifier/token", resp2.data.accessToken);
  };
  
  return (
    <Container display={display}>
      <InputCont>
        <Inputs
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email, password)
          }}
        />
        <Inputs
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(email, password)
          }}
        />
        {/* <Inputs
          type='test'
          placeholder='Full Name'
          onChange={(e) => {
            setFullname(e.target.value)
          }}
        /> */}
      </InputCont>
      <BtnCont>
        <BasicBtn
          text="Sign up"
          bgcolor="#6524FF"
          color="#fff"
          hvcolor="#5200cc"
          onClick={Auth}
        />
        <Divider />
        <BasicBtn icon="icons/icon2.png" text="Continue with Facebook" />
      </BtnCont>
    </Container>
  );
};

SignupForm.defaultProps = {
  onBtnClick: () => {},
};

export default SignupForm;
