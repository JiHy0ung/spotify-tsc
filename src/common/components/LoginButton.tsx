import { styled } from "@mui/material";
import React from "react";
import { getSpotifyAuthUrl } from "../../utils/auth";

const LoginBTN = styled("button")({
  height: "48px",
  background: "#ffffff",
  color: "#000000",
  padding: "8px 32px",
  fontSize: "1rem",
  fontWeight: "bold",
  outline: "none",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
  "&:hover": {
    background: "#f0f0f0",
    transform: "scale(1.05)",
  },
});

const LoginButton = () => {
  const login = () => {
    getSpotifyAuthUrl();
  };
  return <LoginBTN onClick={login}>로그인하기</LoginBTN>;
};

export default LoginButton;
