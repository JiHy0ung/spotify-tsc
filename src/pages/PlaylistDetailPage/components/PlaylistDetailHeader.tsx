import React from "react";
import { styled, Typography } from "@mui/material";
import PlayButton from "../../../common/components/PlayButton";

const PlaylistDetailHeaderContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "8px",
  padding: "24px 12px",
  margin: "16px",
  borderRadius: "8px",
  [theme.breakpoints.up("xl")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: "24px",
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
    filter: "blur(30px) saturate(1.5)",
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
  gap: "3px",
  [theme.breakpoints.down("xl")]: {
    flexDirection: "column",
    gap: "0px",
  },
}));

const PlaylistHeaderButtonIconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "56px",
  zIndex: 5,
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
  borderRadius: "50%",
  boxShadow: "0 4px 12px #0000004d;",
  border: "none",
  outline: "none",
  backgroundColor: theme.palette.primary.main,
}));

const PlaylistHeaderPlayButtonIcon = styled("svg")(({ theme }) => ({
  fill: theme.palette.background.default,
}));

const PlaylistHeaderLikeIcon = styled("svg")(({ theme }) => ({
  width: "24px",
  fill: theme.palette.primary.main,
}));

const PlaylistHeaderIcon = styled("svg")(({ theme }) => ({
  width: "24px",
  fill: "#b3b3b3",
}));

interface PlaylistDetailItemProps {
  name: string;
  image: string | null;
  owner: string | null;
  follower: number;
  total: number;
}

const PlaylistDetailHeader = ({
  name,
  image,
  owner,
  follower,
  total,
}: PlaylistDetailItemProps) => {
  return (
    <PlaylistDetailHeaderContainer>
      {image && <PlaylistHeaderBackground backgroundImage={image} />}
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
            <Typography fontSize={"13px"} display={{ xs: "none", md: "block" }}>
              • 저장 횟수: {follower} • 총 {total}곡
            </Typography>
            <Typography fontSize={"13px"} display={{ xs: "block", md: "none" }}>
              저장 횟수: {follower} • 총 {total}곡
            </Typography>
          </PlaylistHeaderInfoText>
        </PlaylistHeaderUserInfo>
      </PlaylistHeaderTextArea>
      <PlaylistHeaderButtonIconsContainer>
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
      </PlaylistHeaderButtonIconsContainer>
    </PlaylistDetailHeaderContainer>
  );
};

export default PlaylistDetailHeader;
