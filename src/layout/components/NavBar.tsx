import React from "react";
import { styled } from "@mui/material";
import { NavLink } from "react-router";
import spotifyLogo from "../../assets/logo/Spotify_Logo_White.png";
import "../styles/AppLayout.style.css";

const NavBar = () => {
  const NavBar = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "64px",
    padding: "8px",
  });

  const NavIcon = styled(NavLink)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fill: theme.palette.secondary.main,
  }));

  const NavIconArea = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "48px",
    height: "48px",
    backgroundColor: "#1f1f1f",
    borderRadius: "30px",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
    },
  });

  const NavSearchBar = styled("div")({
    width: "474px",
    height: "48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    borderRadius: "30px",
    padding: "0px 12px",
    marginInline: "8px",
  });
  return (
    <NavBar>
      <NavIcon to="/">
        <img src={spotifyLogo} alt="spotify logo" className="layout-logo-img" />
      </NavIcon>
      <div className="container-center">
        <NavIconArea>
          <NavIcon to="/">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="layout_home_img"
            >
              <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
            </svg>
          </NavIcon>
        </NavIconArea>
        <NavSearchBar>
          <div className="layout-nav-search-box">
            <NavIcon to="/search">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                data-testid="search-icon"
                className="layout_search_img"
                viewBox="0 0 24 24"
              >
                <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
              </svg>
            </NavIcon>
            <input
              className="layout-search-input"
              placeholder="어떤 콘텐츠를 감상하고 싶으세요?"
            />
          </div>
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="layout_search_content_img"
          >
            <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path>
            <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
          </svg>
        </NavSearchBar>
        <div className="container-center">
          <div className="layout-nav-info-1">
            <div>Premium</div>
            <div>지원</div>
            <div>다운로드하기</div>
          </div>
          <div className="layout-nav-info-2">
            <div className="container-center">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="layout-nav-download-img"
              >
                <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
              </svg>
              앱 설치하기
            </div>
            <div>가입하기</div>
          </div>
        </div>
        <button className="layout-nav-login-btn">로그인하기</button>
      </div>
    </NavBar>
  );
};

export default NavBar;
