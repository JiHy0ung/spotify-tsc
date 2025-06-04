import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import "../styles/AppLayout.style.css";

const NotPlayingBar = () => {
  const NotPlayingBarContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    width: "calc(100% - 16px);",
    height: "66px",
    position: "fixed",
    bottom: 0,
    left: 0,
    padding: "11px 24px 7px 15px",
    margin: "8px",
    background: "linear-gradient(to right, #af2896, #509bf5)",
  });

  return (
    <NotPlayingBarContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0",
          margin: "0"
        }}
      >
        <Typography variant="body1" fontWeight={700} letterSpacing="-0.3px">
          Spotify 미리 듣기
        </Typography>
        <Typography variant="h2" fontWeight={400} letterSpacing="-0.3px">
          가끔 표시되는 광고와 함께 무제한 곡 및 팟캐스트를 이용하려면
          가입하세요. 신용카드는 필요 없습니다.
        </Typography>
      </Box>
      <Box>
        <button className="layout-notplaying-sign-up">무료로 가입하기</button>
      </Box>
    </NotPlayingBarContainer>
  );
};

export default NotPlayingBar;
