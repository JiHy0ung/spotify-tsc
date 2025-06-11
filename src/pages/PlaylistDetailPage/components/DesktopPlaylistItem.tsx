import React from "react";
import { styled, TableCell, TableRow } from "@mui/material";
import { PlaylistTrack } from "../../../models/playlist";
import { Episode, Track } from "../../../models/track";

interface DesktopPlaylistItemProps {
  item: PlaylistTrack;
  index: number;
}

const DesktopPlaylistItem = ({ item, index }: DesktopPlaylistItemProps) => {
  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track;
  };

  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>{item.track.name || "No Name"}</TableCell>
      {/* <TableCell>{item.track.album?.name}</TableCell> 유니온 타입의 문제 때문에 아래 코드처럼 작성*/}
      <TableCell>
        {isEpisode(item.track) ? "N/A" : item.track.album?.name}
      </TableCell>
      <TableCell>{item.added_at || "Unknown"}</TableCell>
      <TableCell>{item.track.duration_ms || "Unknown"}</TableCell>
    </TableRow>
  );
};

export default DesktopPlaylistItem;
