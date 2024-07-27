import React from "react";
import styled from "styled-components";
import sellPointLogo from "../../assets/image/SellpointLogo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    return;
  };
  return (
    <HeaderContainer>
      <Logo src={sellPointLogo} alt="SellPoint" onClick={handleClick} />
      <LoginButton>로그인</LoginButton>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
  pointer: cursor;
`;

const LoginButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
`;
