import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Divider from "comps/Divider";
import Inputs from "comps/Inputs";
import BasicBtn from "comps/Buttons/BasicBtn";
import axios from "axios";
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

//const token = null;
const LoginForm = ({ display, onBtnClick, name }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showlogin, setShow] = useState(true);

  // const CheckStorage = async () => {
  //   var token = await sessionStorage.getItem('token')
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = token
  //     var resp = await axios.get(
  //       'https://sharestation.herokuapp.com/api/verify'
  //     )
  //     console.log('verification', resp.data)
  //     if (resp.data !== 'expired') {
  //       // setShow(false)
  //       history.push('/FeedPage')
  //     }
  //   }
  // }

  const Auth = async () => {
    var resp2 = await axios.post(
      "https://sharestation.herokuapp.com/api/login",
      {
        email: email,
        password: password,
      }
    );
    //token = resp2.data;
    axios.defaults.headers.common["Authorization"] = resp2.data.accessToken;
    sessionStorage.setItem("token", resp2.data.accessToken);
    sessionStorage.setItem("id", resp2.data.id);
    setShow(false);
    history.push("/FeedPage");
    console.log("identifier/token", resp2.data.accessToken);
  };

  const Restricted = async () => {
    var resp = await axios.post(
      "https://sharestation.herokuapp.com/api/restricted",
      {
        itemname: "item 1",
      }
    );
    console.log("restricted", resp.data);
  };

  useEffect(() => {
    //  CheckStorage();
  }, []);

  return (
    <Container display={display}>
      {showlogin && (
        <>
          <InputCont>
            <Inputs
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Inputs
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputCont>

          <BtnCont>
            <BasicBtn
              text="Login"
              bgcolor="#6524FF"
              color="#fff"
              hvcolor="#5200cc"
              onClick={Auth}
              // onClick={() => {
              //   onBtnClick(name, email, password)
              // }}
            />
            {/* <BasicBtn
              text='Restricted'
              bgcolor='#6524FF'
              color='#fff'
              hvcolor='#5200cc'
              onClick={Restricted}
            /> */}
            <Divider />
            <BasicBtn icon="icons/icon2.png" text="Continue with Facebook" />
          </BtnCont>
        </>
      )}
    </Container>
  );
};

LoginForm.defaultProps = {
  onBtnClick: () => {},
};

export default LoginForm;
