import React, { useState } from "react";
import NewReleases from "./components/NewReleases";
import { styled, Typography } from "@mui/material";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import GlobalTrackChart from "./components/GlobalTrackChart";
import TopHitsAlbums from "./components/TopHitsAlbums";
import TopHitsArtists from "./components/TopHitsArtists";

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
  paddingBottom: "32px",
  borderRadius: "8px",
  overflowX: "hidden",
  overflowY: "auto",
  backgroundImage: "linear-gradient(to bottom, #5c5c5c 0%, #121212 35%)",

  [theme.breakpoints.down("xl")]: {
    borderRadius: "0px",
    paddingTop: "0px",
    paddingBottom: "70px",
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
  position: "relative",
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
  outline: "none",
  border: "none",
  borderRadius: "30px",
  marginTop: "8px",
  backgroundColor: theme.palette.background.default,

  "& a": {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
}));

const HomePageBannerCloseButton = styled("button")({
  position: "absolute",
  right: "0",
  top: "0",
  width: "41px",
  padding: "12px",
  background: "none",
  outline: "none",
  border: "none",
});

const HomePageBannerCloseButtonIcon = styled("svg")({
  width: "17px",
  fill: "#121212",
});

const HomePage = () => {
  const { data: userProfile } = useGetCurrentUserProfile();

  const [close, setClose] = useState<boolean>(false);

  return (
    <HomePageWrapper>
      <HomePageContainer>
        {!userProfile && !close && (
          <HomePageBanner>
            <HomePageBannerCloseButton onClick={() => setClose(true)}>
              <HomePageBannerCloseButtonIcon
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M3.293 3.293a1 1 0 0 1 1.414 0L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 0 1 0-1.414"></path>
              </HomePageBannerCloseButtonIcon>
            </HomePageBannerCloseButton>
            <Typography
              variant="h2"
              fontSize={"32px"}
              fontWeight={700}
              color="#000000"
            >
              Premium 가입하기
            </Typography>
            <Typography
              variant="h2"
              fontWeight={"400"}
              color="#000000"
              marginTop={"4px"}
            >
              무광고 음악을 마음껏 즐기세요. 언제든 해지 가능합니다.
            </Typography>
            <HomePageBannerButton>
              <a
                href="https://www.spotify.com/premium/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Premium 가입하기
              </a>
            </HomePageBannerButton>
          </HomePageBanner>
        )}
        <NewReleases />
        <TopHitsArtists />
        <TopHitsAlbums />
        <GlobalTrackChart />
      </HomePageContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
