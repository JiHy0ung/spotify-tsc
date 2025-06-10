import React from "react";
import useGetPlaylist from "../../hooks/useGetPlaylist";
import { Navigate, useParams } from "react-router";

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: playlist } = useGetPlaylist({ playlist_id: id || "" });

  if (id === undefined) return <Navigate to="/" />;

  return <div>PlaylistDetailPage</div>;
};

export default PlaylistDetailPage;
