import React from "react";
import useGetPlaylist from "../../hooks/useGetPlaylist";
import { Navigate, useParams } from "react-router";
import PlaylistDetailHeader from "./PlaylistDetailHeader";
import { styled } from "@mui/system";

const PlaylistDetailContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "16px",
  borderRadius: "8px",
});

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: playlist } = useGetPlaylist({ playlist_id: id || "" });

  console.log("pp", playlist);

  if (id === undefined) return <Navigate to="/" />;

  return (
    <PlaylistDetailContainer>
      <PlaylistDetailHeader
        name={playlist?.name}
        image={playlist?.images[0].url}
        owner={playlist?.owner?.display_name}
        total={playlist?.tracks?.total}
      />
    </PlaylistDetailContainer>
  );
};

export default PlaylistDetailPage;
