import React from "react";
import { styled, Typography } from "@mui/material";
import PlayButton from "../../../common/components/PlayButton";
import { transform } from "typescript";
import Loading from "../../../common/components/Loading";

const PlaylistDetailHeaderContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "8px",
  borderRadius: "8px",
  [theme.breakpoints.up("xl")]: {
    alignItems: "center",
    borderRadius: "0px",
  },
  [theme.breakpoints.down("xl")]: {
    padding: "0px",
  },
}));

const PlaylistHeaderTextArea = styled("div")(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "8px",
  zIndex: 3,
  [theme.breakpoints.up("xl")]: {
    alignSelf: "flex-end",
  },
  [theme.breakpoints.down("md")]: {
    gap: "8px",
  },
}));

const PlaylistHeaderBackground = styled("div")(
  ({ backgroundImage }: { backgroundImage?: string }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 100,
    backgroundImage: backgroundImage
      ? `linear-gradient(to bottom, rgba(18, 18, 18, 0) 30%, rgba(18, 18, 18, 1) 100%), url(${backgroundImage})`
      : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(70px) saturate(1.5)",
    opacity: 0.8,
    zIndex: 2,
    transform: "scale(2)",
    borderRadius: "8px",
  })
);

const PlaylistHeaderCoverImage = styled("img")(({ theme }) => ({
  alignSelf: "center",
  marginBottom: "8px",
  width: "172px",
  height: "172px",
  boxShadow: "0 4px 60px rgba(0, 0, 0, 0.5)",
  zIndex: 3,
  [theme.breakpoints.up("xl")]: {
    alignSelf: "flex-start",
    width: "232px",
    height: "232px",
    borderRadius: "4px",
    marginBottom: "0px",
  },
  [theme.breakpoints.down("xl")]: {
    width: "288px",
    height: "288px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "172px",
    height: "172px",
  },
}));

const PlaylistHeaderUserInfo = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const PlaylistHeaderUserImage = styled("img")({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
});

const PlaylistHeaderCoverNoImageArea = styled("div")(({ theme }) => ({
  display: "flex",
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  width: "172px",
  height: "172px",
  backgroundColor: "#282828",
  [theme.breakpoints.up("xl")]: {
    alignSelf: "flex-start",
    width: "232px",
    height: "232px",
    minWidth: "232px",
    minHeight: "232px",
    borderRadius: "4px",
    marginBottom: "0px",
  },
  [theme.breakpoints.down("xl")]: {
    width: "288px",
    height: "288px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "172px",
    height: "172px",
  },
}));

const PlaylistHeaderCoverNoImage = styled("svg")({
  width: "64px",
  height: "64px",
  fill: "#b3b3b3",
});

const PlaylistHeaderInfoText = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "3px",
  [theme.breakpoints.down("xl")]: {
    flexDirection: "column",
    gap: "0px",
  },
}));

const MobilePlaylistHeaderButtonIconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "0px 0px 16px 4px",
  zIndex: 5,
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
}));

const DesktopPlaylistHeaderButtonIconsContainer = styled("div")(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#12121233",
    padding: "24px",
    width: "100%",
    height: "104px",
    zIndex: 5,
    [theme.breakpoints.down("xl")]: {
      display: "none",
    },
  })
);

const DesktopPlaylistHeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  gap: "24px",
  padding: "44px 24px 24px 24px",
  width: "100%",
  [theme.breakpoints.down("xl")]: {
    flexDirection: "column",
    padding: "15px 16px 0px 16px",
  },
}));

const PlaylistHeaderButtonsArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PlaylistHeaderButtons = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "48px",
  height: "48px",
  padding: "12px",
  background: "none",
  border: "none",
  outline: "none",
  transition: "all 0.5s",
  cursor: "pointer",
  "&:hover": {
    "& svg": { fill: "#ffffff" },
    transform: "scale(1.05)",
  },
});

const PlaylistHeaderPlayButton = styled("button")(({ theme }) => ({
  width: "56px",
  height: "56px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "16px",
  borderRadius: "50%",
  boxShadow: "0 4px 12px #0000004d;",
  border: "none",
  outline: "none",
  backgroundColor: theme.palette.primary.main,
  cursor: "pointer",
  transition: "all 0.1s ease",
  "&:hover": {
    backgroundColor: "#3be477",
    transform: "scale(1.05)",
  },
}));

const DesktopPlaylistHeaderPlayButton = styled("button")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "56px",
  height: "56px",
  padding: "0px 0px",
  background: "none",
  border: "none",
  outline: "none",
  transition: "all 0.5s",
  cursor: "pointer",
  "&:hover": {
    "& svg": { fill: "#ffffff" },
    transform: "scale(1.05)",
  },
}));

const PlaylistHeaderPlayButtonIcon = styled("svg")(({ theme }) => ({
  fill: theme.palette.background.default,
}));

const PlaylistHeaderLikeIcon = styled("svg")(({ theme }) => ({
  width: "24px",
  fill: theme.palette.primary.main,
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
}));

const PlaylistHeaderIcon = styled("svg")(({ theme }) => ({
  width: "24px",
  fill: "#b3b3b3",
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
}));

const DesktopPlaylistPreviewContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "48px",
  width: "38px",
  borderRadius: "8px",
  backgroundColor: "#b3b3b3",
  marginLeft: "24px",
  marginRight: "12px",
});

const DesktopPlaylistPreviewImage = styled("img")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  objectFit: "cover",
  height: "44px",
  width: "34px",
  border: "2px solid black",
  borderRadius: "6px",
  cursor: "pointer",
  "&:hover": {
    filter: "brightness(70%)",
  },
});

const DesktopPlaylistHeaderIcon = styled("svg")(({ theme }) => ({
  width: "32px",
  fill: "#b3b3b3",
}));

const EmptyPlaylistIconsContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
});

const EmptyPlaylistIconsArea = styled("div")({
  width: "100%",
  display: "flex",
  gap: "24px",
});

const EmptyPlaylistIcon = styled("svg")({
  display: "flex",
  width: "32px",
  fill: "#b3b3b3",
  cursor: "pointer",
  "&:hover": {
    fill: "#ffffff",
    transform: "scale(1.05)",
  },
});

const EmptyPlaylistListButton = styled("button")({
  width: "80px",
  display: "flex",
  gap: "8px",
  paddingInline: "8px",
  background: "none",
  outline: "none",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    "&:hover svg": {
      fill: "#ffffff",
    },
    "&:hover .list-button-text": {
      color: "#ffffff",
    },
  },
});

const EmptyPlaylistListText = styled(Typography)({
  fontSize: "14px",
  color: "#b3b3b3",
});

const EmptyPlaylistListIcon = styled("svg")({
  display: "flex",
  width: "16px",
  fill: "#b3b3b3",
});

interface PlaylistDetailItemProps {
  name: string;
  image: string | null;
  owner: string | null;
  follower: number;
  total: number;
  f_image: string;
}

const PlaylistDetailHeader = ({
  name,
  image,
  owner,
  follower,
  total,
  f_image,
}: PlaylistDetailItemProps) => {
  return (
    <PlaylistDetailHeaderContainer>
      {image && <PlaylistHeaderBackground backgroundImage={image} />}
      <DesktopPlaylistHeaderContainer>
        {image ? (
          <PlaylistHeaderCoverImage src={image} />
        ) : (
          <PlaylistHeaderCoverNoImageArea>
            <PlaylistHeaderCoverNoImage viewBox="0 0 24 24">
              <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
            </PlaylistHeaderCoverNoImage>
          </PlaylistHeaderCoverNoImageArea>
        )}
        <PlaylistHeaderTextArea>
          <Typography
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "flex",
              },
            }}
            color="#ffffff"
            fontSize={"14px"}
          >
            공개 플레이리스트
          </Typography>
          <Typography
            variant="h1"
            letterSpacing={"-0.5px"}
            sx={{
              fontSize: {
                xs: "24px",
                sm: "24px",
                md: "24px",
                lg: "24px",
                xl: "96px",
              },

              fontWeight: {
                lg: "900",
                xl: "900",
              },

              marginBottom: {
                xl: "12px",
              },
            }}
          >
            {name}
          </Typography>
          <PlaylistHeaderUserInfo>
            {/* <PlaylistHeaderUserImage src={user?.images?.[0].url} /> */}
            <PlaylistHeaderInfoText>
              <Typography>{owner}</Typography>
              <Typography
                fontSize={"13px"}
                display={{
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "block",
                }}
              >
                • 저장 횟수: {follower} • 총 {total}곡
              </Typography>
              <Typography
                fontSize={"13px"}
                display={{
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "none",
                }}
              >
                저장 횟수: {follower} • 총 {total}곡
              </Typography>
            </PlaylistHeaderInfoText>
          </PlaylistHeaderUserInfo>
        </PlaylistHeaderTextArea>
      </DesktopPlaylistHeaderContainer>

      {total < 1 ? (
        <EmptyPlaylistIconsContainer>
          <EmptyPlaylistIconsArea>
            <EmptyPlaylistIcon aria-hidden="true" viewBox="0 0 24 24">
              <path d="M4.99 3h2.993v2H4.99v3H2.994V5H0V3h2.994V0h1.995zm7.288-.533a5.49 5.49 0 0 1 6.275 1.322 5.5 5.5 0 0 1 1.133 1.953c.18.532.33 1.474.277 2.378-.098 1.659-.8 3.02-1.749 4.156l-.432.52a.5.5 0 0 0 .134.752l3.59 2.077A5 5 0 0 1 24 19.955V22H4.99v-2.045a5 5 0 0 1 2.494-4.33l3.59-2.077a.5.5 0 0 0 .133-.753l-.43-.518-.002-.001c-.949-1.135-1.65-2.497-1.749-4.156-.053-.904.097-1.846.277-2.378a5.5 5.5 0 0 1 1.133-1.953 5.5 5.5 0 0 1 1.842-1.322M14.494 4a3.5 3.5 0 0 0-2.586 1.14 3.5 3.5 0 0 0-.715 1.245c-.092.272-.213.954-.174 1.617.066 1.124.536 2.092 1.287 2.99l.001.002.433.52a2.503 2.503 0 0 1-.669 3.767l-3.589 2.076a3 3 0 0 0-1.497 2.598V20h15.02v-.045a3 3 0 0 0-1.498-2.598l-3.589-2.076a2.503 2.503 0 0 1-.669-3.766l.433-.52.002-.003c.75-.898 1.22-1.866 1.287-2.99.039-.663-.082-1.345-.174-1.617-.163-.48-.4-.9-.715-1.245A3.5 3.5 0 0 0 14.494 4"></path>
            </EmptyPlaylistIcon>
            <EmptyPlaylistIcon aria-hidden="true" viewBox="0 0 24 24">
              <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path>
            </EmptyPlaylistIcon>
          </EmptyPlaylistIconsArea>
          <EmptyPlaylistListButton>
            <EmptyPlaylistListText className="list-button-text">
              목록
            </EmptyPlaylistListText>
            <EmptyPlaylistListIcon aria-hidden="true" viewBox="0 0 16 16">
              <path d="M15 14.5H5V13h10zm0-5.75H5v-1.5h10zM15 3H5V1.5h10zM3 3H1V1.5h2zm0 11.5H1V13h2zm0-5.75H1v-1.5h2z"></path>
            </EmptyPlaylistListIcon>
          </EmptyPlaylistListButton>
        </EmptyPlaylistIconsContainer>
      ) : (
        <>
          <DesktopPlaylistHeaderButtonIconsContainer>
            <PlaylistHeaderButtonsArea>
              <PlaylistHeaderPlayButton>
                <PlaylistHeaderPlayButtonIcon
                  viewBox="0 0 24 24"
                  width={"24px"}
                >
                  <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                </PlaylistHeaderPlayButtonIcon>
              </PlaylistHeaderPlayButton>
              <DesktopPlaylistPreviewContainer>
                <DesktopPlaylistPreviewImage src={f_image} />
              </DesktopPlaylistPreviewContainer>
              <DesktopPlaylistHeaderPlayButton>
                <DesktopPlaylistHeaderIcon
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
                </DesktopPlaylistHeaderIcon>
              </DesktopPlaylistHeaderPlayButton>
              <DesktopPlaylistHeaderPlayButton>
                <DesktopPlaylistHeaderIcon
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
                  <path d="M12 6.05a1 1 0 0 1 1 1v7.486l1.793-1.793a1 1 0 1 1 1.414 1.414L12 18.364l-4.207-4.207a1 1 0 1 1 1.414-1.414L11 14.536V7.05a1 1 0 0 1 1-1z"></path>
                </DesktopPlaylistHeaderIcon>
              </DesktopPlaylistHeaderPlayButton>
              <DesktopPlaylistHeaderPlayButton>
                <DesktopPlaylistHeaderIcon
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                </DesktopPlaylistHeaderIcon>
              </DesktopPlaylistHeaderPlayButton>
            </PlaylistHeaderButtonsArea>
          </DesktopPlaylistHeaderButtonIconsContainer>

          <MobilePlaylistHeaderButtonIconsContainer>
            <PlaylistHeaderButtonsArea>
              <PlaylistHeaderButtons>
                <PlaylistHeaderLikeIcon aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M8.667 1.912a6.257 6.257 0 0 0-7.462 7.677c.24.906.683 1.747 1.295 2.457l7.955 9.482a2.015 2.015 0 0 0 3.09 0l7.956-9.482a6.188 6.188 0 0 0 1.382-5.234l-.49.097.49-.099a6.303 6.303 0 0 0-5.162-4.98h-.002a6.24 6.24 0 0 0-5.295 1.65.623.623 0 0 1-.848 0 6.257 6.257 0 0 0-2.91-1.568z"></path>
                </PlaylistHeaderLikeIcon>
              </PlaylistHeaderButtons>
              <PlaylistHeaderButtons>
                <PlaylistHeaderIcon aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M3 8a1 1 0 0 1 1-1h3.5v2H5v11h14V9h-2.5V7H20a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z"></path>
                  <path d="M12 12.326a1 1 0 0 0 1-1V3.841l1.793 1.793a1 1 0 1 0 1.414-1.414L12 .012 7.793 4.22a1 1 0 1 0 1.414 1.414L11 3.84v7.485a1 1 0 0 0 1 1z"></path>
                </PlaylistHeaderIcon>
              </PlaylistHeaderButtons>
              <PlaylistHeaderButtons>
                <PlaylistHeaderIcon aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                </PlaylistHeaderIcon>
              </PlaylistHeaderButtons>
            </PlaylistHeaderButtonsArea>
            <PlaylistHeaderPlayButton>
              <PlaylistHeaderPlayButtonIcon viewBox="0 0 24 24" width={"24px"}>
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
              </PlaylistHeaderPlayButtonIcon>
            </PlaylistHeaderPlayButton>
          </MobilePlaylistHeaderButtonIconsContainer>
        </>
      )}
    </PlaylistDetailHeaderContainer>
  );
};

export default PlaylistDetailHeader;
