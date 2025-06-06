import React from "react";
import NewReleases from "./components/NewReleases";
import { styled, Typography } from "@mui/material";

const HomePageWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  borderRadius: "8px",
  overflow: "hidden",
  [theme.breakpoints.down("xl")]: {
    borderRadius: "0px",
  },
}));

const HomePageContainer = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  paddingTop: "4px",
  borderRadius: "8px",
  overflowX: "hidden",
  overflowY: "auto",
  backgroundImage: "linear-gradient(to bottom, #212121 0%, #121212 35%)",

  [theme.breakpoints.down("xl")]: {
    borderRadius: "0px",
    paddingTop: "0px",
    paddingBottom:"70px",
    backgroundColor: theme.palette.background.paper,
    backgroundImage: "none",
  },

  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ffffff4c",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#ffffff80",
  },
}));

const HomePageBanner = styled("div")(({ theme }) => ({
  height: "166px",
  padding: "32px 16px",
  backgroundColor: "#ffcdd2",
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
}));

const HomePageBannerButton = styled("button")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "13px",
  fontWeight: "700",
  padding: "8px 16px",
  outline:"none",
  border:"none",
  borderRadius: "30px",
  marginTop: "8px",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}));

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomePageContainer>
        <HomePageBanner>
          <Typography
            variant="h2"
            fontSize={"32px"}
            fontWeight={700}
            color="#000000"
          >
            Premium 가입하기
          </Typography>
          <Typography variant="h2" fontWeight={"400"} color="#000000" marginTop={"4px"}>
            무광고 음악을 마음껏 즐기세요. 언제든 해지 가능합니다.
          </Typography>
          <HomePageBannerButton>Premium 가입하기</HomePageBannerButton>
        </HomePageBanner>
        <NewReleases />
      </HomePageContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
