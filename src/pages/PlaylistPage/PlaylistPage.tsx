import React from "react";
import Library from "../../layout/components/Library";
import { styled, Typography } from "@mui/material";

const PlaylistContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "#121212",
});

const PlaylistTitle = styled("div")({
  display: "flex",
  padding: "8px 8px",
});

const PlaylistPage = () => {
  return (
    <PlaylistContainer>
      <PlaylistTitle>
        <Typography variant="h1">라이브러리</Typography>
      </PlaylistTitle>
      <Library />
    </PlaylistContainer>
  );
};

export default PlaylistPage;
