import { styled, Typography } from "@mui/material";
import React from "react";
import LoginButton from "./LoginButton";

const GoToLoginContainer = styled("div")({
  hight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
});

const GoToLogin = () => {
  return (
    <GoToLoginContainer>
      <Typography fontSize={"1rem"} fontWeight={700}>
        다시 로그인하세요.
      </Typography>
      <LoginButton />
    </GoToLoginContainer>
  );
};

export default GoToLogin;
