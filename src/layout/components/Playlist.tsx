import React from "react";
import { SimplifiedPlaylist } from "../../models/playlist";
import PlaylistItem from "../../common/components/PlaylistItem";
import { useNavigate } from "react-router";
import { styled } from "@mui/material";

interface PlaylistProps {
  playlists: SimplifiedPlaylist[];
}

const Playlist = ({ playlists }: PlaylistProps) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/playlist/${id}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {playlists.map((playlist) => (
        <PlaylistItem
          name={playlist.name || ""}
          image={(playlist.images && playlist.images[0]?.url) || null}
          id={playlist.id || ""}
          key={playlist.id}
          artistName={playlist.owner?.display_name || null}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Playlist;
