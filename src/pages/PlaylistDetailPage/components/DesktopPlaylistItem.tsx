import React, { useState } from "react";
import {
  ClickAwayListener,
  styled,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { PlaylistTrack } from "../../../models/playlist";
import { Episode, Track } from "../../../models/track";
import { useParams } from "react-router";
import useRemovePlaylistItems from "../../../hooks/useRemovePlaylistItems";
import useGetCurrentUserProfile from "../../../hooks/useGetCurrentUserProfile";

interface DesktopPlaylistItemProps {
  item: PlaylistTrack;
  index: number;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: "54px",
  borderRadius: "4px",
  position: "relative",
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
    "& .desktop-playlist-items-play-icon-arrow": {
      display: "flex",
    },
    "& .desktop-playlist-item-index": {
      display: "none",
    },
    "& .desktop-playlist-item-option-icon": {
      display: "flex",
    },
  },

  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const DesktopPlaylistTitleArea = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const StyledTableCell = styled(TableCell)({
  height: "54px",
  color: "#ffffff",
  fontSize: "14px",
  border: "none",
  padding: "7px",
});

const StyledTableCellTitle = styled(TableCell)({
  height: "54px",
  color: "#ffffff",
  fontSize: "16px",
  border: "none",
  padding: "7px",
});

const StyledTableCellIndex = styled(TableCell)({
  width: "16px",
  height: "54px",
  gap: "12px",
  color: "#ffffff",
  fontSize: "16px",
  border: "none",
  padding: "7px",
});

const StyledTableTypography = styled(Typography)({
  width: "fit-content",
  cursor: "pointer",
  "&:hover": {
    color: "#ffffff",
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

const DesktopPlaylistItemsAlbumCover = styled("img")({
  width: "40px",
  height: "40px",
  borderRadius: "4px",
});

const DesktopTitleTextArea = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2px",
});

const DesktopIndexTextArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const DesktopPlaylistItemPlayIconArrow = styled("svg")({
  display: "none",
  height: "24px",
  width: "16px",
  fill: "#ffffff",
});

const StyledTableOPtionCell = styled(TableCell)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  height: "54px",
  color: "#ffffff",
  fontSize: "14px",
  border: "none",
  padding: "7px",
});

const DesktopPlaylistItemOptionIconArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const DesktopPlaylistItemOptionIcon = styled("svg")({
  width: "16px",
  display: "none",
  position: "absolute",
  left: "8px",
  fill: "#ffffff",
});

const DesktopPlaylistItemOptionMenu = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  right: "0",
  top: "24px",
  width: "220px",
  padding: "4px",
  borderRadius: "4px",
  backgroundColor: "#282828",
  boxShadow: "0 6px 8px #00000033",
  zIndex: "99",
});

const DesktopPlaylistItemOptionMenuButton = styled("button")({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  gap: "8px",
  padding: "12px 8px 12px 12px",
  outline: "none",
  border: "none",
  borderRadius: "2px",
  height: "40px",
  background: "none",
  "&:hover": {
    backgroundColor: "#ffffff1a",
  },
});

const DesktopPlaylistItemOptionMenuDeleteIcon = styled("svg")({
  height: "16px",
  width: "16px",
  fill: "#b3b3b3",
});

const DesktopPlaylistItem = ({ item, index }: DesktopPlaylistItemProps) => {
  const [itemOptionMenuOpen, setItemOptionMenuOpen] = useState(false);

  const { id } = useParams<{ id: string }>();
  const { mutate: removeItem } = useRemovePlaylistItems();

  const handleRemovePlaylistItem = (track: Track | Episode) => {
    removeItem({ playlist_id: id, track: { uri: track.uri } });
    setItemOptionMenuOpen(false);
  };

  let minutes: number = 0;
  let seconds: string | number = "00";

  let year = "0";
  let month = "0";
  let day = "0";

  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track;
  };

  if (item.track.duration_ms && item.track.duration_ms !== 0) {
    minutes = Math.floor(item.track.duration_ms / 60000);
    seconds = Math.floor((item.track.duration_ms % 60000) / 1000)
      .toString()
      .padStart(2, "0");
  }

  if (item.added_at) {
    year = item.added_at.slice(0, 4);
    month = item.added_at.slice(5, 7);
    day = item.added_at.slice(8, 10);
  } else {
    item.added_at = "Unknown";
  }

  const handleOptionClick = () => {
    setItemOptionMenuOpen((prev) => !prev);
  };

  const handleOptionClickAway = () => {
    setItemOptionMenuOpen(false);
  };

  return (
    <StyledTableRow>
      <StyledTableCellIndex>
        <DesktopIndexTextArea>
          <StyledTableTypography
            variant="body1"
            sx={{
              "&:hover": {
                textDecoration: "none",
              },
            }}
            fontSize={"1rem"}
            fontWeight={500}
            color="#b3b3b3"
            className="desktop-playlist-item-index"
          >
            {index}
          </StyledTableTypography>
          <DesktopPlaylistItemPlayIconArrow
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="desktop-playlist-items-play-icon-arrow"
          >
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
          </DesktopPlaylistItemPlayIconArrow>
        </DesktopIndexTextArea>
      </StyledTableCellIndex>
      <StyledTableCellTitle>
        <DesktopPlaylistTitleArea>
          <DesktopPlaylistItemsAlbumCover
            src={
              isEpisode(item.track)
                ? "No Image"
                : item.track.album?.images[0].url
            }
          />
          <DesktopTitleTextArea>
            <StyledTableTypography variant="h2" fontWeight={400}>
              {item.track.name || "No Name"}
            </StyledTableTypography>
            <StyledTableTypography fontSize={"0.8125rem"} color="#b3b3b3">
              {isEpisode(item.track)
                ? "Unknown"
                : item.track.artists?.map((artist) => artist.name).join(", ")}
            </StyledTableTypography>
          </DesktopTitleTextArea>
        </DesktopPlaylistTitleArea>
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
      <StyledTableOPtionCell>
        <StyledTableTypographyInfo variant="body1">
          {minutes}:{seconds}
        </StyledTableTypographyInfo>
        <ClickAwayListener onClickAway={handleOptionClickAway}>
          <DesktopPlaylistItemOptionIconArea>
            <DesktopPlaylistItemOptionIcon
              width={"16px"}
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="desktop-playlist-item-option-icon"
              onClick={handleOptionClick}
            >
              <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
            </DesktopPlaylistItemOptionIcon>
            {itemOptionMenuOpen ? (
              <DesktopPlaylistItemOptionMenu>
                <DesktopPlaylistItemOptionMenuButton
                  onClick={() => {
                    handleRemovePlaylistItem(item.track);
                  }}
                >
                  <DesktopPlaylistItemOptionMenuDeleteIcon
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.25 3v-.917C5.25.933 6.183 0 7.333 0h1.334c1.15 0 2.083.933 2.083 2.083V3h4.75v1.5h-.972l-1.257 9.544A2.25 2.25 0 0 1 11.041 16H4.96a2.25 2.25 0 0 1-2.23-1.956L1.472 4.5H.5V3zm1.5-.917V3h2.5v-.917a.583.583 0 0 0-.583-.583H7.333a.583.583 0 0 0-.583.583M2.986 4.5l1.23 9.348a.75.75 0 0 0 .744.652h6.08a.75.75 0 0 0 .744-.652L13.015 4.5H2.985z"></path>
                  </DesktopPlaylistItemOptionMenuDeleteIcon>
                  <Typography
                    color="#ffffffe6"
                    sx={{ "&:hover": { color: "#ffffff" } }}
                  >
                    이 플레이리스트에서 삭제하기
                  </Typography>
                </DesktopPlaylistItemOptionMenuButton>
              </DesktopPlaylistItemOptionMenu>
            ) : null}
          </DesktopPlaylistItemOptionIconArea>
        </ClickAwayListener>
      </StyledTableOPtionCell>
    </StyledTableRow>
  );
};

export default DesktopPlaylistItem;
