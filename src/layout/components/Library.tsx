import React from "react";
import EmptyPlaylist from "./EmptyPlaylist";
import useGetCurrentUserPlaylists from "../../hooks/useGetCurrentUserPlaylists";
import Playlist from "./Playlist";

const Library = () => {

  const { data: userPlaylists } = useGetCurrentUserPlaylists({
    limit: 10,
    offset: 0,
  }); // 0번째 데이터 부터 10개 까지

  console.log("playlist", userPlaylists);

  return <>{userPlaylists ? <Playlist /> : <EmptyPlaylist />}</>;
};

export default Library;
