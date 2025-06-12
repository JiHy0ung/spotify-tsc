import React from "react";
import { styled, TableCell, TableRow, Typography } from "@mui/material";
import { PlaylistTrack } from "../../../models/playlist";
import { Episode, Track } from "../../../models/track";

interface MobilePlaylistItemProps {
  item: PlaylistTrack;
  index: number;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#1f1f1f",
  },

  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
}));

const MobilePlaylistItemsSongArea = styled("div")({
  display: "flex",
  gap: "12px",
});

const MobilePlaylistItemsSongInfoArea = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2px",
});

const MobilePlaylistItemsAlbumCover = styled("img")({
  width: "48px",
  height: "48px",
  borderRadius: "4px",
});

const StyledTableCellTitle = styled(TableCell)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  color: "#ffffff",
  fontSize: "16px",
  border: "none",
  [theme.breakpoints.down("xl")]: {
    padding: "8px 12px",
  },
}));

const MobilePlaylistItemsEllipsisIcon = styled("svg")({
  width: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fill: "#ffffff",
});

const MobilePlaylistItems = ({ item, index }: MobilePlaylistItemProps) => {
  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track;
  };

  return (
    <StyledTableRow>
      <StyledTableCellTitle>
        <MobilePlaylistItemsSongArea>
          <MobilePlaylistItemsAlbumCover
            src={
              isEpisode(item.track)
                ? "No Image"
                : item.track.album?.images[0].url
            }
          />
          <MobilePlaylistItemsSongInfoArea>
            <Typography variant="h2" fontWeight={400}>
              {item.track.name
                ? item.track.name.length > 20
                  ? item.track.name.slice(0, 20) + "..."
                  : item.track.name
                : "Unknown"}
            </Typography>
            <Typography fontSize={"0.8125rem"} color="#b3b3b3">
              {isEpisode(item.track)
                ? "Unknown"
                : item.track.artists?.map((artist) => artist.name).join(", ")}
            </Typography>
          </MobilePlaylistItemsSongInfoArea>
        </MobilePlaylistItemsSongArea>
        <MobilePlaylistItemsEllipsisIcon
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
        </MobilePlaylistItemsEllipsisIcon>
      </StyledTableCellTitle>
    </StyledTableRow>
  );
};

export default MobilePlaylistItems;
