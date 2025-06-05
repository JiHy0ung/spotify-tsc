import React from "react";
import NewReleases from "./components/NewReleases";
import { styled } from "@mui/material";
import "./styles/HomePage.style.css";

const HomePageWrapper = styled("div")({
  height: "100%",
  borderRadius: "8px",
  overflow: "hidden",
});

const HomePageContainer = styled("div")({
  height: "100%",
  width: "100%",
  paddingTop: "4px",
  borderRadius: "8px",
  overflowX: "hidden",
  overflowY: "auto",
  backgroundImage: "linear-gradient(to bottom, #212121 0%, #121212 35%)",

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
});

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomePageContainer>
        <NewReleases />
      </HomePageContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
