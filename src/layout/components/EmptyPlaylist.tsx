import React, { useState } from "react";
import { keyframes, Menu, styled, Typography } from "@mui/material";
import "../styles/AppLayout.style.css";
import { transform } from "typescript";
import { getSpotifyAuthUrl } from "../../utils/auth";

const EmptyLibrary = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
  padding: "8px",
});

const EmptyLibraryContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "left",
  height: "133px",
  gap: "16px",
  borderRadius: "8px",
  padding: "16px 20px",
  marginBlock: "8px",
  backgroundColor: "#1f1f1f",
});

const EmptyLibraryButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.875rem",
  fontWeight: "700",
  borderRadius: "30px",
  backgroundColor: "white",
  padding: "8px 16px",
  width: "fit-content",
  border: "none",
  outline: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    transform: "scale(1.05)",
  },
});

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const EmptyLibraryPopperWrapper = styled("div")({
  position: "absolute",
  width: "336px",
  maxWidth: "336px",
  maxHeight: "490px",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  animation: `${fadeSlideIn} 0.3s ease-out forwards`,
  opacity: 0,
  transform: "translateY(-10px)",
});

const EmptyLibraryPopperContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "336px",
  maxHeight: "490px",
  borderRadius: "8px",
  backgroundColor: "#69bfff",
  padding: "16px",
  width: "100%",
  position: "absolute",
  marginLeft: "280px",
  marginTop: "-25px",
  zIndex: "3",
});

const EmptyLibraryPopperContainerArrow = styled("div")({
  position: "absolute",
  left: "275px",
  top: "40px",
  width: "16px",
  height: "16px",
  backgroundColor: "#69bfff",
  transform: "rotate(45deg)",
});

const EmptyLibraryPopperLoginButtonArea = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "24px",
});

const EmptyLibraryPopperLaterButton = styled("button")({
  height: "32px",
  padding: "6px 16px",
  background: "none",
  outline: "none",
  border: "none",
  fontWeight: "800",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const EmptyLibraryPopperLoginButton = styled("button")({
  height: "32px",
  padding: "6px 16px",
  fontWeight: "800",
  outline: "none",
  border: "none",
  backgroundColor: "#ffffff",
  borderRadius: "30px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    transform: "scale(1.05)",
  },
});

const EmptyPlaylist = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const login = () => {
    getSpotifyAuthUrl();
  };

  return (
    <EmptyLibrary>
      <EmptyLibraryContent>
        <div className="layout-empty-library-text">
          <Typography
            variant="h2"
            fontWeight={700}
            letterSpacing="-0.5px"
            sx={{ cursor: "default" }}
          >
            첫 번째 플레이리스트를 만드세요.
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            letterSpacing="-0.5px"
            sx={{ cursor: "default" }}
          >
            어렵지 않아요. 저희가 도와드릴게요.
          </Typography>
        </div>
        <EmptyLibraryButton onClick={handleOpen}>
          플레이리스트 만들기
        </EmptyLibraryButton>

        {open && (
          <EmptyLibraryPopperWrapper>
            <EmptyLibraryPopperContainer>
              <Typography
                variant="h2"
                color="#000000"
                fontWeight={700}
                mb={"8px"}
              >
                플레이리스트를 만드세요.
              </Typography>
              <Typography variant="body1" color="#000000" mb={"8px"}>
                플레이리스트를 만들고 공유하려면 로그인하세요.
              </Typography>
              <EmptyLibraryPopperLoginButtonArea>
                <EmptyLibraryPopperLaterButton onClick={handleClose}>
                  나중에
                </EmptyLibraryPopperLaterButton>
                <EmptyLibraryPopperLoginButton onClick={login}>
                  로그인하기
                </EmptyLibraryPopperLoginButton>
              </EmptyLibraryPopperLoginButtonArea>
            </EmptyLibraryPopperContainer>
            <EmptyLibraryPopperContainerArrow />
          </EmptyLibraryPopperWrapper>
        )}
      </EmptyLibraryContent>
      <EmptyLibraryContent>
        <div className="layout-empty-library-text">
          <Typography
            variant="h2"
            fontWeight={700}
            letterSpacing="-0.5px"
            sx={{ cursor: "default" }}
          >
            팔로우할 팟캐스트를 찾아보세요.
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            letterSpacing="-0.5px"
            sx={{ cursor: "default" }}
          >
            새로운 에피소드에 대한 소식을 알려드릴게요.
          </Typography>
        </div>
        <EmptyLibraryButton>팟캐스트 둘러보기</EmptyLibraryButton>
      </EmptyLibraryContent>
    </EmptyLibrary>
  );
};

export default EmptyPlaylist;
