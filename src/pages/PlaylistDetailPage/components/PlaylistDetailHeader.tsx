import React from "react";
import { styled, Typography } from "@mui/material";

const PlaylistDetailHeaderContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "8px",
  padding: "24px 12px",
  borderRadius: "8px",
  [theme.breakpoints.up("xl")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: "24px",
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
    bottom: 0,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(100px)",
    opacity: 1,
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
          <Typography>{owner}</Typography>
          <Typography fontSize={"13px"}>• 저장 횟수: {follower} • 총 {total}곡</Typography>
        </PlaylistHeaderUserInfo>
      </PlaylistHeaderTextArea>
    </PlaylistDetailHeaderContainer>
  );
};

export default PlaylistDetailHeader;
