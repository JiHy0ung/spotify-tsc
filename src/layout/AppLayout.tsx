import { styled } from "@mui/material";
import { Outlet } from "react-router";
import "./styles/AppLayout.style.css";
import LibraryHead from "./components/LibraryHead";
import EmptyPlaylist from "./components/EmptyPlaylist";
import NotPlayingBar from "./components/NotPlayingBar";
import NavBar from "./components/NavBar";

const LayoutContainer = styled("div")({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
});

const SideBar = styled("div")(({ theme }) => ({
  width: "420px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MainContainer = styled("div")({
  display: "flex",
  height: "100%",
  paddingInline: "8px",
  marginBottom: "82px",
  gap: "8px",
});

const ContentBox = styled("div")(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: "100%",
  marginBottom: "8px",
  marginRight: "8px",
}));

const AppLayout = () => {
  return (
    <LayoutContainer>
      <NavBar />
      <MainContainer>
        <SideBar>
          <ContentBox>
            <LibraryHead />
            <EmptyPlaylist />
          </ContentBox>
        </SideBar>
        <Outlet />
      </MainContainer>
      <NotPlayingBar />
    </LayoutContainer>
  );
};

export default AppLayout;
