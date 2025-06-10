import { styled, Typography } from "@mui/material";
import React from "react";

// const PlaylistContainer = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   paddingInline: "8px",
// }));

const PlaylistContainer = styled("div")(({ theme }) => ({
  height: "64px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "8px",
  padding: "8px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "6px",
  color: theme.palette.text.primary,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#1f1f1f",
  },
}));

const PlaylistCoverImage = styled("img")({
  height: "48px",
  width: "48px",
  borderRadius: "4px",
});

const PlaylistInfoArea = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
}));

const PlaylistCoverContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "48px",
  height: "48px",
  borderRadius: "4px",
  padding: "12px",
  backgroundColor: "#282828",
});

const PlaylistCoverNoImage = styled("svg")({
  width: "24px",
  height: "24px",
  fill: "#b3b3b3",
});

interface PlaylistItemProps {
  name: string;
  image: string | null;
  artistName: string | null;
  id: string;
  handleClick: (id: string) => void;
}

const PlaylistItem = ({
  name,
  image,
  artistName,
  id,
  handleClick,
}: PlaylistItemProps) => {
  return (
    <PlaylistContainer key={id} onClick={() => handleClick(id)}>
      {image ? (
        <PlaylistCoverImage src={image} />
      ) : (
        <PlaylistCoverContainer>
          <PlaylistCoverNoImage width={"24px"}>
            <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
          </PlaylistCoverNoImage>
        </PlaylistCoverContainer>
      )}
      <PlaylistInfoArea>
        <Typography variant="h2" fontWeight={"400"}>
          {name}
        </Typography>
        <Typography fontSize="0.875rem" color="textSecondary">
          {artistName}
        </Typography>
      </PlaylistInfoArea>
    </PlaylistContainer>
  );
};

export default PlaylistItem;
