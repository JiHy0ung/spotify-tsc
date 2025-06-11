import React from "react";
import { styled, TableCell, TableRow, Typography } from "@mui/material";
import { PlaylistTrack } from "../../../models/playlist";
import { Episode, Track } from "../../../models/track";

interface DesktopPlaylistItemProps {
  item: PlaylistTrack;
  index: number;
}

const StyledTableRow = styled(TableRow)({
  borderRadius: "4px",
  "&:hover": {
    "& td": {
      backgroundColor: "#ffffff1a",
    },
    "& td:first-of-type": {
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
    "& td:last-of-type": {
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
    },
    "& .album-text": {
      color: "#ffffff",
    },
  },
});

const StyledTableCell = styled(TableCell)({
  color: "#ffffff",
  fontSize: "14px",
  border: "none",
});

const StyledTableCellTitle = styled(TableCell)({
  color: "#ffffff",
  fontSize: "16px",
  border: "none",
});

const StyledTableTypography = styled(Typography)({
  width: "fit-content",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const StyledTableTypographyAlbum = styled(Typography)({
  width: "fit-content",
  color: "#b3b3b3",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const StyledTableTypographyInfo = styled(Typography)({
  width: "fit-content",
  color: "#b3b3b3",
});

const DesktopPlaylistItem = ({ item, index }: DesktopPlaylistItemProps) => {
  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track;
  };

  let minutes: number = 0;
  let seconds: string | number = "00";

  if (item.track.duration_ms && item.track.duration_ms !== 0) {
    minutes = Math.floor(item.track.duration_ms / 60000);
    seconds = Math.floor((item.track.duration_ms % 60000) / 1000)
      .toString()
      .padStart(2, "0");
  }

  let year = "0";
  let month = "0";
  let day = "0";

  //2024-03-07T15:14:23Z

  if (item.added_at) {
    year = item.added_at.slice(0, 4);
    month = item.added_at.slice(5, 7);
    day = item.added_at.slice(8, 10);
  } else {
    item.added_at = "Unknown";
  }

  return (
    <StyledTableRow>
      <StyledTableCell>
        <StyledTableTypography
          variant="body1"
          sx={{
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          {index}
        </StyledTableTypography>
      </StyledTableCell>
      <StyledTableCellTitle>
        <StyledTableTypography variant="h2" fontWeight={400}>
          {item.track.name || "No Name"}
        </StyledTableTypography>
      </StyledTableCellTitle>
      {/* <TableCell>{item.track.album?.name}</TableCell> 유니온 타입의 문제 때문에 아래 코드처럼 작성*/}
      <StyledTableCell>
        <StyledTableTypographyAlbum variant="body1" className="album-text">
          {isEpisode(item.track) ? "N/A" : item.track.album?.name}
        </StyledTableTypographyAlbum>
      </StyledTableCell>
      <StyledTableCell>
        <StyledTableTypographyInfo variant="body1">
          {year}년 {month}월 {day}일
        </StyledTableTypographyInfo>
      </StyledTableCell>
      <StyledTableCell>
        <StyledTableTypographyInfo variant="body1">
          {minutes}:{seconds}
        </StyledTableTypographyInfo>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default DesktopPlaylistItem;
