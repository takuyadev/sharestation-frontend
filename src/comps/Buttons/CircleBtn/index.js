import React from "react";
import styled from "styled-components";

const BtnCont = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.clicked == 1 ? props.color : "#666666")};
  opacity: 0.5;
  backdrop-filter: blur(20px);
  :hover {
    opacity: 0.9;
  }
`;
const Icon = styled.img``;

const CircleBtn = ({ icon, onClick, btnname, color, clicked }) => {
  return (
    <BtnCont
      clicked={clicked}
      color={color}
      onClick={() => {
        onClick();
      }}
      name={btnname}
    >
      <Icon src={icon} />
    </BtnCont>
  );
};

CircleBtn.defaultProps = {
  onClick: () => {},
};

export default CircleBtn;
