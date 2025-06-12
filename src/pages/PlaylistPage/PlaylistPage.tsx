import React from "react";
import Library from "../../layout/components/Library";
import { styled, Typography } from "@mui/material";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import GoToLogin from "../../common/components/GoToLogin";

const PlaylistContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "#121212",
});

const PlaylistLoginContainer = styled("div")({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PlaylistTitle = styled("div")({
  display: "flex",
  padding: "8px 8px",
});

const PlaylistPage = () => {
  const { data: user } = useGetCurrentUserProfile();

  return (
    <PlaylistContainer>
      {user ? (
        <>
          <PlaylistTitle>
            <Typography variant="h1">라이브러리</Typography>
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
