import React from "react";
import { SimplifiedPlaylist } from "../../../models/playlist";
import SearchWithKeywordAddMenuPlaylistItem from "./SearchWithKeywordAddMenuPlaylistItem";
import useGetCurrentUserProfile from "../../../hooks/useGetCurrentUserProfile";

interface PlaylistProps {
  playlists: SimplifiedPlaylist[];
  track: string;
}

const SearchWithKeywordAddMenuPlaylist = ({ playlists, track }: PlaylistProps) => {
  const { data: user } = useGetCurrentUserProfile();

  const filteredPlaylists = playlists.filter(
    (playlist) => playlist.owner?.display_name === user?.display_name
  );

  console.log("p2", filteredPlaylists);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {filteredPlaylists.map((playlist) => (
        <SearchWithKeywordAddMenuPlaylistItem
          name={playlist.name || ""}
          image={(playlist.images && playlist.images[0]?.url) || null}
          id={playlist.id || ""}
          uri={track}
          key={playlist.id}
          ownerName={playlist.owner?.display_name || null}
        />
      ))}
    </div>
  );
};

export default SearchWithKeywordAddMenuPlaylist;
