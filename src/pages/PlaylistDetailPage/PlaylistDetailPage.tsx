import React from "react";
import useGetPlaylist from "../../hooks/useGetPlaylist";
import { Navigate, useParams } from "react-router";
import PlaylistDetailHeader from "./PlaylistDetailHeader";
import { styled } from "@mui/system";

const PlaylistDetailContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: "#121212",
});

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: playlist } = useGetPlaylist({ playlist_id: id || "" });

  console.log("pp", playlist);

  if (id === undefined) return <Navigate to="/" />;

  return (
    <PlaylistDetailContainer>
      <PlaylistDetailHeader
        name={playlist?.name || "unknown"}
        image={playlist?.images?.[0].url || ""}
        owner={playlist?.owner?.display_name || "unknown"}
        total={playlist?.tracks?.total || 0}
      />
    </PlaylistDetailContainer>
  );
};

export default PlaylistDetailPage;
