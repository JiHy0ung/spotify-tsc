import React, { useState } from "react";
import {
  ClickAwayListener,
  styled,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import spotifyLogo from "../../assets/logo/Spotify_Logo_White.png";
import spotifyLogoWithText from "../../assets/logo/Spotify_Logo_Text_White.png";
import "../styles/AppLayout.style.css";
import LoginButton from "../../common/components/LoginButton";
import { getSpotifyAuthUrl } from "../../utils/auth";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import { TooltipProps } from "react-bootstrap";

const NavContainerCenter = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const NavBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "64px",
  padding: "8px",
  [theme.breakpoints.down("xl")]: {
    height: "56px",
    padding: "0px",
  },
}));

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

const NavSearchBar = styled("div")(({ theme }) => ({
  width: "474px",
  height: "48px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1f1f1f",
  borderRadius: "30px",
  padding: "0px 12px",
  marginInline: "8px",
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const NavDesktopImage = styled("img")(({ theme }) => ({
  height: "32px",
  paddingInline: "20px",
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const NavMobileImage = styled("img")(({ theme }) => ({
  height: "24px",
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
}));

const NavSearchBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const NavDesktopWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: "1",
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const NavMobileWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "16px",
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "16px",
    paddingRight: "8px",
  },
}));

const NavMobileButtons = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
}));

const NavOpenAppButton = styled("button")(({ theme }) => ({
  color: "#000000",
  fontSize: "13px",
  fontWeight: "800",
  padding: "8px 16px",
  outline: "none",
  border: "none",
  borderRadius: "30px",
  backgroundColor: theme.palette.secondary.main,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    transform: "scale(1.05)",
  },
}));

const NavHamburgerButton = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fill: theme.palette.secondary.main,
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const NavProfileContainer = styled("img")(({ theme }) => ({
  position: "relative",
  height: "48px",
  width: "48px",
  border: "8px solid #1f1f1f",
  borderRadius: "50%",
}));

const NavProfileNoImageContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  fontSize: "14px",
  fontWeight: "700",
  color: "black",
  height: "48px",
  width: "48px",
  background: "#ff6437",
  border: "8px solid #1f1f1f",
  borderRadius: "50%",
});

const NavMobileLoginWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const NavInfoSecond = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  color: "#b3b3b3",
  fontWeight: "700",
  fontSize: "0.875rme",
  paddingRight: "16px",
  borderLeft: "1px solid #000000",
}));

const NavUserLogoutContainer = styled("div")({
  width: "196px",
  borderRadius: "4px",
  padding: "4px",
  position: "absolute",
  top: 56,
  right: 0,
  zIndex: "99",
  boxShadow: "0 6px 8px rgba(0,0,0,0.3)",
  backgroundColor: "#282828",
});

const NavUserLogoutButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  width: "188px",
  padding: "12px 8px 12px 12px",
  backgroundColor: "#282828",
  cursor: "pointer",
  border: "none",
  outline: "none",
  "&:hover": {
    backgroundColor: "#3e3d3d",
  },
});

const NavBarInfoFirst = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  fontWeight: "700",
  fontSize: "1rem",
  marginInline: "10px",

  "& a": {
    color: "#b3b3b3",
    cursor: "pointer",
    textDecoration: "none",
    "&:visited": {
      color: "#b3b3b3",
    },
    "&:hover": {
      color: "#ffffff",
    },
  },
});

const NavBarInfoSecond = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  color: "#b3b3b3",
  fontWeight: "700",
  fontSize: "0.875rem",
  marginLeft: "16px",
  paddingLeft: "16px",
  borderLeft: "1px solid #ffffff",

  "& a": {
    padding: "4px 16px 4px 8px",
    color: "#b3b3b3",
    cursor: "pointer",
    textDecoration: "none",
    "&:visited": {
      color: "#b3b3b3",
    },
    "&:hover": {
      color: "#ffffff",
    },
  },
});

const NavBarLinkArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& a": {
    padding: "4px 16px 4px 8px",
    color: "#b3b3b3",
    cursor: "pointer",
    textDecoration: "none",
    "&:visited": {
      color: "#b3b3b3",
    },
  },
  "&:hover": {
    "& svg": {
      fill: "#ffffff",
    },
    "& a": {
      color: "#ffffff",
    },
  },
});

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#1f1f1f",
    fontSize: "14px",
  },
});

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchWithKeyword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setKeyword(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate(`/search/${keyword}`);
    }
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const { data: userProfile } = useGetCurrentUserProfile();

  const login = () => {
    getSpotifyAuthUrl();
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    // navigate("/");
    window.location.reload();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <NavBarContainer>
        {userProfile ? (
          <NavMobileWrapper>
            <NavIcon to="/">
              <NavDesktopImage src={spotifyLogo} alt="spotify logo" />
              <NavMobileImage src={spotifyLogoWithText} alt="spotify logo" />
            </NavIcon>
            <NavMobileLoginWrapper>
              <div style={{ position: "relative" }}>
                {userProfile.images?.[0]?.url ? (
                  <>
                    <NavProfileContainer
                      onClick={handleClick}
                      src={userProfile.images[0].url}
                      alt={userProfile.display_name}
                    />
                    {open ? (
                      <NavUserLogoutContainer>
                        <NavUserLogoutButton onClick={logout}>
                          <Typography fontSize={"14px"} color="#ffffff">
                            로그아웃
                          </Typography>
                        </NavUserLogoutButton>
                      </NavUserLogoutContainer>
                    ) : null}
                  </>
                ) : (
                  <>
                    <NavProfileNoImageContainer onClick={handleClick}>
                      {userProfile.display_name?.charAt(0)}
                    </NavProfileNoImageContainer>
                    {open ? (
                      <NavUserLogoutContainer>
                        <NavUserLogoutButton onClick={logout}>
                          <Typography fontSize={"14px"} color="#ffffff">
                            로그아웃
                          </Typography>
                        </NavUserLogoutButton>
                      </NavUserLogoutContainer>
                    ) : null}
                  </>
                )}
              </div>
            </NavMobileLoginWrapper>
          </NavMobileWrapper>
        ) : (
          <NavMobileWrapper>
            <NavIcon to="/">
              <NavDesktopImage src={spotifyLogo} alt="spotify logo" />
              <NavMobileImage src={spotifyLogoWithText} alt="spotify logo" />
            </NavIcon>
            <NavMobileButtons>
              <NavOpenAppButton onClick={login}>로그인</NavOpenAppButton>
              <NavHamburgerButton>
                <svg
                  role="img"
                  aria-hidden="true"
                  height={"24px"}
                  width={"24px"}
                >
                  <path d="M21 6H3V4h18v2zm0 14H3v-2h18v2zm0-7H3v-2h18v2z"></path>
                </svg>
              </NavHamburgerButton>
            </NavMobileButtons>
          </NavMobileWrapper>
        )}

        <NavDesktopWrapper>
          <NavIcon to="/">
            <NavDesktopImage src={spotifyLogo} alt="spotify logo" />
            <NavMobileImage src={spotifyLogoWithText} alt="spotify logo" />
          </NavIcon>
          <NavContainerCenter>
            <CustomTooltip
              title="홈"
              PopperProps={{
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -10], // [x, y] offset
                    },
                  },
                ],
              }}
            >
              <NavIcon to="/">
                <NavIconArea>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="layout_home_img"
                  >
                    <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
                  </svg>
                </NavIconArea>
              </NavIcon>
            </CustomTooltip>
            <NavSearchBar>
              <NavSearchBox>
                <CustomTooltip title="검색하기">
                  <svg
                    aria-hidden="true"
                    data-testid="search-icon"
                    className="layout_search_img"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                  </svg>
                </CustomTooltip>
                <input
                  value={keyword}
                  onChange={handleSearchWithKeyword}
                  onKeyDown={handleKeyDown}
                  className="layout-search-input"
                  placeholder="어떤 콘텐츠를 감상하고 싶으세요?"
                />
              </NavSearchBox>
              <CustomTooltip title="둘러보기">
                <NavIcon to="/search">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="layout_search_content_img"
                  >
                    <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path>
                    <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
                  </svg>
                </NavIcon>
              </CustomTooltip>
            </NavSearchBar>
          </NavContainerCenter>

          {userProfile ? (
            <NavContainerCenter>
              <NavContainerCenter sx={{ paddingInline: "8px" }}>
                <NavInfoSecond>
                  <NavContainerCenter sx={{ gap: "8px" }}>
                    <NavBarLinkArea>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="layout-nav-download-img"
                      >
                        <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
                      </svg>
                      <a
                        href="https://www.spotify.com/download"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        앱 설치하기
                      </a>
                    </NavBarLinkArea>
                  </NavContainerCenter>

                  <NavContainerCenter>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="layout-nav-download-img"
                    >
                      <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
                    </svg>
                  </NavContainerCenter>

                  <NavContainerCenter>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="layout-nav-download-img"
                    >
                      <path d="M3.849 10.034c-.021-.465.026-.93.139-1.381H1.669c.143-.303.375-.556.665-.724l.922-.532a1.631 1.631 0 0 0 .436-2.458 1.809 1.809 0 0 1-.474-1.081c-.01-.19.01-.38.057-.563a1.123 1.123 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0c.149.065.282.161.392.281.108.12.188.263.237.417.049.183.068.372.057.561a1.81 1.81 0 0 1-.475 1.084 1.6 1.6 0 0 0-.124 1.9c.36-.388.792-.702 1.272-.927v-.015c.48-.546.768-1.233.821-1.958a3.23 3.23 0 0 0-.135-1.132 2.657 2.657 0 0 0-5.04 0c-.111.367-.157.75-.135 1.133.053.724.341 1.41.821 1.955A.126.126 0 0 1 2.565 6a.13.13 0 0 1-.063.091l-.922.532A3.2 3.2 0 0 0-.004 9.396v.75h3.866c.001-.033-.01-.071-.013-.112zm10.568-3.4-.922-.532a.132.132 0 0 1-.064-.091.12.12 0 0 1 .028-.1c.48-.546.768-1.233.821-1.958a3.289 3.289 0 0 0-.135-1.135A2.635 2.635 0 0 0 12.7 1.233a2.669 2.669 0 0 0-3.042.64 2.646 2.646 0 0 0-.554.948c-.11.367-.156.75-.134 1.133.053.724.341 1.41.821 1.955.005.006 0 .011 0 .018.48.225.911.54 1.272.927a1.6 1.6 0 0 0-.125-1.907 1.809 1.809 0 0 1-.474-1.081c-.01-.19.009-.38.057-.563a1.123 1.123 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0c.149.065.282.161.392.281.107.12.187.26.236.413.05.184.07.375.058.565a1.81 1.81 0 0 1-.475 1.084 1.633 1.633 0 0 0 .438 2.456l.922.532c.29.169.52.421.664.724h-2.319c.113.452.16.918.139 1.383 0 .04-.013.078-.017.117h3.866v-.75a3.2 3.2 0 0 0-1.58-2.778v.004zm-3.625 6-.922-.532a.13.13 0 0 1-.061-.144.122.122 0 0 1 .025-.047 3.33 3.33 0 0 0 .821-1.958 3.229 3.229 0 0 0-.135-1.132 2.657 2.657 0 0 0-5.041 0c-.11.367-.156.75-.134 1.133.053.724.341 1.41.821 1.955a.127.127 0 0 1 .028.106.128.128 0 0 1-.063.091l-.922.532a3.2 3.2 0 0 0-1.584 2.773v.75h8.75v-.75a3.2 3.2 0 0 0-1.583-2.781v.004zm-5.5 2.023c.143-.303.375-.556.665-.724l.922-.532a1.63 1.63 0 0 0 .436-2.458 1.809 1.809 0 0 1-.474-1.081c-.01-.19.009-.38.057-.563a1.123 1.123 0 0 1 .627-.7 1.2 1.2 0 0 1 .944 0c.149.065.282.161.392.281.108.12.188.263.237.417.049.183.068.372.057.561a1.81 1.81 0 0 1-.475 1.084 1.632 1.632 0 0 0 .438 2.456l.922.532c.29.169.52.421.664.724l-5.412.003z"></path>
                    </svg>
                  </NavContainerCenter>
                </NavInfoSecond>
              </NavContainerCenter>

              {userProfile.images?.[0]?.url ? (
                <>
                  <NavProfileContainer
                    onClick={handleClick}
                    src={userProfile.images[0].url}
                    alt={userProfile.display_name}
                  />
                  {open ? (
                    <NavUserLogoutContainer>
                      <NavUserLogoutButton onClick={logout}>
                        <Typography fontSize={"14px"} color="#ffffff">
                          로그아웃
                        </Typography>
                      </NavUserLogoutButton>
                    </NavUserLogoutContainer>
                  ) : null}
                </>
              ) : (
                <>
                  <NavProfileNoImageContainer onClick={handleClick}>
                    {userProfile.display_name?.charAt(0)}
                  </NavProfileNoImageContainer>
                  {open ? (
                    <NavUserLogoutContainer>
                      <NavUserLogoutButton onClick={logout}>
                        <Typography fontSize={"14px"} color="#ffffff">
                          로그아웃
                        </Typography>
                      </NavUserLogoutButton>
                    </NavUserLogoutContainer>
                  ) : null}
                </>
              )}
            </NavContainerCenter>
          ) : (
            <NavContainerCenter>
              <NavContainerCenter>
                <NavBarInfoFirst>
                  <a
                    href="https://www.spotify.com/premium/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Premium
                  </a>
                  <a
                    href="https://support.spotify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    지원
                  </a>
                  <a
                    href="https://www.spotify.com/download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    다운로드하기
                  </a>
                </NavBarInfoFirst>
                <NavBarInfoSecond>
                  <NavContainerCenter>
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
                    <a
                      href="https://www.spotify.com/download"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      앱 설치하기
                    </a>
                  </NavContainerCenter>
                  <a
                    href="https://www.spotify.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    가입하기
                  </a>
                </NavBarInfoSecond>
              </NavContainerCenter>
              <LoginButton />
            </NavContainerCenter>
          )}
        </NavDesktopWrapper>
      </NavBarContainer>
    </ClickAwayListener>
  );
};

export default NavBar;
