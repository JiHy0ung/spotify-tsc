import React from "react";
import { Box, styled, Typography } from "@mui/material";
import "../styles/AppLayout.style.css";
import { NavLink, useLocation } from "react-router";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";

const NotPlayingBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "calc(100% - 16px)",
  height: "66px",
  position: "fixed",
  bottom: 0,
  left: 0,
  padding: "11px 24px 7px 15px",
  margin: "8px",
  background: "linear-gradient(to right, #af2896, #509bf5)",
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const NotPlayBarMobileContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70px",
  width: "100%",
  left: 0,
  bottom: 0,
  position: "fixed",
  zIndex: 1000,
  background:
    "linear-gradient(to bottom,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))",
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
}));

const NotPlayingBarMobileTabArea = styled(NavLink)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: "1",
  gap: "4px",
  textDecoration: "none",
});

const NotPlayingBarMobileTabAreaPremium = styled("a")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: "1",
  gap: "4px",
  textDecoration: "none",
});

const MobileTabIcon = styled("svg")<{ active: boolean }>(
  ({ theme, active }) => ({
    height: "24px",
    width: "24px",
    fill: active ? theme.palette.text.primary : "#b3b3b3",
  })
);

const MobileTabPremiumIcon = styled("svg")(({ theme }) => ({
  height: "24px",
  width: "24px",
  fill: "#b3b3b3",
}));

const NotPlayingBarLogin = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc(100% - 16px)",
  height: "66px",
  position: "fixed",
  bottom: 0,
  left: 0,
  padding: "11px 24px 7px 15px",
  margin: "8px",
  background: "#121212",
  color: "#b3b3b3",
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const TextDecoration = styled("span")({
  fontSize: "13px",

  textDecoration: "underline",
});

const NotPlayingBar = () => {
  const { data: user } = useGetCurrentUserProfile();

  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const getTextColor = (path: string) =>
    isActive(path) ? "#FFFFFF" : "#b3b3b3";

  return (
    <>
      {user ? (
        <>
          <NotPlayingBarLogin>
            <Typography fontSize={"13px"}>
              이 사이트는 reCAPTCHA로 보호되며, Google{" "}
            </Typography>
            <TextDecoration>개인정보 처리방침</TextDecoration>
            <Typography fontSize={"13px"}>과 </Typography>
            <TextDecoration>서비스 약관이</TextDecoration>
            <Typography fontSize={"13px"}>
              적용됩니다. (임시 플레잉 바)
            </Typography>
          </NotPlayingBarLogin>
          <NotPlayBarMobileContainer>
            <NotPlayingBarMobileTabArea to="/">
              <MobileTabIcon
                active={isActive("/")}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
              </MobileTabIcon>
              <Typography sx={{ color: getTextColor("/") }} fontSize={"11px"}>
                홈
              </Typography>
            </NotPlayingBarMobileTabArea>
            <NotPlayingBarMobileTabArea to="/search">
              <MobileTabIcon
                active={isActive("/search")}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
              </MobileTabIcon>
              <Typography sx={{ color: getTextColor("/") }} fontSize={"11px"}>
                검색하기
              </Typography>
            </NotPlayingBarMobileTabArea>
            <NotPlayingBarMobileTabArea to="/playlist">
              <MobileTabIcon
                active={isActive("/playlist")}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
              </MobileTabIcon>
              <Typography sx={{ color: getTextColor("/") }} fontSize={"11px"}>
                내 라이브러리
              </Typography>
            </NotPlayingBarMobileTabArea>
            <NotPlayingBarMobileTabArea to="https://www.spotify.com/premium/">
              <MobileTabPremiumIcon aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12.438 1.009C6.368.769 1.251 5.494 1.008 11.565c-.24 6.07 4.485 11.186 10.556 11.426 6.07.242 11.185-4.484 11.427-10.554.242-6.07-4.484-11.186-10.553-11.428Zm4.644 16.114a.657.657 0 0 1-.897.246 13.22 13.22 0 0 0-4.71-1.602 13.197 13.197 0 0 0-4.968.242.658.658 0 0 1-.31-1.278 14.497 14.497 0 0 1 5.46-.265c1.837.257 3.579.851 5.177 1.76.315.178.425.58.246.896l.002.002Zm1.445-2.887a.853.853 0 0 1-1.158.344 16.214 16.214 0 0 0-5.475-1.797 16.188 16.188 0 0 0-5.758.219.855.855 0 0 1-1.018-.65.852.852 0 0 1 .65-1.018 17.92 17.92 0 0 1 6.362-.241 17.87 17.87 0 0 1 6.049 1.985c.415.224.57.743.344 1.158h.004Zm1.602-3.255a1.052 1.052 0 0 1-1.418.448 19.673 19.673 0 0 0-6.341-2.025 19.642 19.642 0 0 0-6.655.199 1.05 1.05 0 1 1-.417-2.06 21.725 21.725 0 0 1 7.364-.22 21.72 21.72 0 0 1 7.019 2.24c.515.268.715.903.448 1.418Z"></path>
              </MobileTabPremiumIcon>
              <Typography sx={{ color: getTextColor("/") }} fontSize={"11px"}>
                Premium
              </Typography>
            </NotPlayingBarMobileTabArea>
          </NotPlayBarMobileContainer>
        </>
      ) : (
        <>
          <NotPlayingBarContainer>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0",
                margin: "0",
              }}
            >
              <Typography
                variant="body1"
                fontWeight={700}
                letterSpacing="-0.3px"
              >
                Spotify 미리 듣기
              </Typography>
              <Typography variant="h2" fontWeight={400} letterSpacing="-0.3px">
                가끔 표시되는 광고와 함께 무제한 곡 및 팟캐스트를 이용하려면
                가입하세요. 신용카드는 필요 없습니다.
              </Typography>
            </Box>
            <Box>
              <button className="layout-notplaying-sign-up">
                무료로 가입하기
              </button>
            </Box>
          </NotPlayingBarContainer>
          <NotPlayBarMobileContainer>
            <NotPlayingBarMobileTabArea to="/">
              <MobileTabIcon
                active={isActive("/")}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
              </MobileTabIcon>
              <Typography sx={{ color: getTextColor("/") }} fontSize={"11px"}>
                홈
              </Typography>
            </NotPlayingBarMobileTabArea>
            <NotPlayingBarMobileTabArea to="/search">
              <MobileTabIcon
                active={isActive("/search")}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
              </MobileTabIcon>
              <Typography sx={{ color: getTextColor("/") }} fontSize={"11px"}>
                검색하기
              </Typography>
            </NotPlayingBarMobileTabArea>
            <NotPlayingBarMobileTabArea to="/playlist">
              <MobileTabIcon
                active={isActive("/playlist")}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
              </MobileTabIcon>
              <Typography sx={{ color: getTextColor("/") }} fontSize={"11px"}>
                내 라이브러리
              </Typography>
            </NotPlayingBarMobileTabArea>
            <NotPlayingBarMobileTabAreaPremium
              href="https://www.spotify.com/premium/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MobileTabIcon
                active={isActive("/premium")}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M12.438 1.009C6.368.769 1.251 5.494 1.008 11.565c-.24 6.07 4.485 11.186 10.556 11.426 6.07.242 11.185-4.484 11.427-10.554.242-6.07-4.484-11.186-10.553-11.428Zm4.644 16.114a.657.657 0 0 1-.897.246 13.22 13.22 0 0 0-4.71-1.602 13.197 13.197 0 0 0-4.968.242.658.658 0 0 1-.31-1.278 14.497 14.497 0 0 1 5.46-.265c1.837.257 3.579.851 5.177 1.76.315.178.425.58.246.896l.002.002Zm1.445-2.887a.853.853 0 0 1-1.158.344 16.214 16.214 0 0 0-5.475-1.797 16.188 16.188 0 0 0-5.758.219.855.855 0 0 1-1.018-.65.852.852 0 0 1 .65-1.018 17.92 17.92 0 0 1 6.362-.241 17.87 17.87 0 0 1 6.049 1.985c.415.224.57.743.344 1.158h.004Zm1.602-3.255a1.052 1.052 0 0 1-1.418.448 19.673 19.673 0 0 0-6.341-2.025 19.642 19.642 0 0 0-6.655.199 1.05 1.05 0 1 1-.417-2.06 21.725 21.725 0 0 1 7.364-.22 21.72 21.72 0 0 1 7.019 2.24c.515.268.715.903.448 1.418Z"></path>
              </MobileTabIcon>
              <Typography sx={{ color: getTextColor("/") }} fontSize={"11px"}>
                Premium
              </Typography>
            </NotPlayingBarMobileTabAreaPremium>
          </NotPlayBarMobileContainer>
        </>
      )}
    </>
  );
};

export default NotPlayingBar;
