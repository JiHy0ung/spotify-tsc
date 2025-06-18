import React from "react";
import Library from "../../layout/components/Library";
import { styled, Typography } from "@mui/material";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import GoToLogin from "../../common/components/GoToLogin";
import useCreatePlaylist from "../../hooks/useCreatePlaylist";
import { getSpotifyAuthUrl } from "../../utils/auth";

const PlaylistContainer = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "#121212",
  overflowY: "auto",
  [theme.breakpoints.down("xl")]: {
    paddingBottom: "80px",
  },
}));
const PlaylistLoginContainer = styled("div")({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PlaylistTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 8px",
});

const PlaylistPagePlaylistAddButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "none",
  border: "none",
  background: "none",
});

const PlaylistPagePlaylistAddButtonIcon = styled("svg")({
  width: "20px",
  fill: "#b3b3b3",
  "&:hover": {
    fill: "#ffffff",
  },
});

const PlaylistPage = () => {
  const { data: user } = useGetCurrentUserProfile();

  const { mutate: createPlaylist } = useCreatePlaylist();

  const handleCreatePlaylist = () => {
    if (!user) {
      getSpotifyAuthUrl();
    }
    createPlaylist({ name: "나의 플레이리스트" });
  };

  return (
    <PlaylistContainer>
      {user ? (
        <>
          <PlaylistTitle>
            <Typography variant="h1">라이브러리</Typography>
            <PlaylistPagePlaylistAddButton onClick={handleCreatePlaylist}>
              <PlaylistPagePlaylistAddButtonIcon viewBox="0 0 16 16">
                <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
              </PlaylistPagePlaylistAddButtonIcon>
            </PlaylistPagePlaylistAddButton>
          </PlaylistTitle>
          <Library />
        </>
      ) : (
        <PlaylistLoginContainer>
          <GoToLogin />
        </PlaylistLoginContainer>
      )}
    </PlaylistContainer>
  );
};

export default PlaylistPage;
