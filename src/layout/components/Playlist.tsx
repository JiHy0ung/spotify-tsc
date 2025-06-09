import { styled, Typography } from "@mui/material";
import React from "react";
import useGetCurrentUserPlaylists from "../../hooks/useGetCurrentUserPlaylists";

const Playlist = () => {
  const PlaylistContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "8px",
  }));

  const PlaylistItem = styled("div")(({ theme }) => ({
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
    backgroundColor: "red",
  });

  const PlaylistInfoArea = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  }));

  const { data: userPlaylists } = useGetCurrentUserPlaylists({
    limit: 10,
    offset: 0,
  }); // 0번째 데이터 부터 10개 까지

  console.log("playlist", userPlaylists);

  return (
    <PlaylistContainer>
      {userPlaylists?.items.map((playlist) => (
        <PlaylistItem>
          <PlaylistCoverImage src={playlist.images?.[0].url} />
          <PlaylistInfoArea>
            <Typography variant="h2" fontWeight={"400"}>
              {playlist.name}
            </Typography>
            <Typography fontSize="0.875rem" color="textSecondary">
              {playlist.owner?.display_name}
            </Typography>
          </PlaylistInfoArea>
        </PlaylistItem>
      ))}
      {userPlaylists?.items.map((playlist) => (
        <PlaylistItem>
          <PlaylistCoverImage src={playlist.images?.[0].url} />
          <PlaylistInfoArea>
            <Typography variant="h2" fontWeight={"400"}>
              {playlist.name}
            </Typography>
            <Typography fontSize="0.875rem" color="textSecondary">
              {playlist.owner?.display_name}
            </Typography>
          </PlaylistInfoArea>
        </PlaylistItem>
      ))}
    </PlaylistContainer>
  );
};

export default Playlist;
