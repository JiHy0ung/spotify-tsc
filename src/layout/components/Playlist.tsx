import React from "react";
import { SimplifiedPlaylist } from "../../models/playlist";
import PlaylistItem from "../../common/components/PlaylistItem";
import { useNavigate } from "react-router";

interface PlaylistProps {
  playlists: SimplifiedPlaylist[];
}

const Playlist = ({ playlists }: PlaylistProps) => {
  console.log("playlist", playlists);
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/playlist/${id}`);
  };

  return (
    <div>
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
