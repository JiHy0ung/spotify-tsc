import { styled } from "@mui/material";
import { Outlet } from "react-router";
import "./styles/AppLayout.style.css";
import LibraryHead from "./components/LibraryHead";
import EmptyPlaylist from "./components/EmptyPlaylist";
import NotPlayingBar from "./components/NotPlayingBar";
import NavBar from "./components/NavBar";
import Library from "./components/Library";

const LayoutContainer = styled("div")({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
});

const SideBar = styled("div")(({ theme }) => ({
  width: "303px",
  minWidth: "303px",
  height: "calc(100% - NotPlayingBar);",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
  paddingInline: "8px",
  marginBottom: "82px",
  gap: "8px",
  overflow: "hidden",
  [theme.breakpoints.down("xl")]: {
    paddingInline: "0px",
    marginBottom: "0px",
  },
}));

const ContentBox = styled("div")(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: "100%",
  marginBottom: "8px",
  marginRight: "8px",
  overflowY: "auto",
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

const OutletWrapper = styled("div")({
  height: "100%",
  flex: "1",
  overflowX: "hidden",
  overflowY: "auto",
});

const AppLayout = () => {
  return (
    <LayoutContainer>
      <NavBar />
      <MainContainer>
        <SideBar>
          <ContentBox>
            <LibraryHead />
            <Library />
          </ContentBox>
        </SideBar>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </MainContainer>
      <NotPlayingBar />
    </LayoutContainer>
  );
};

export default AppLayout;
