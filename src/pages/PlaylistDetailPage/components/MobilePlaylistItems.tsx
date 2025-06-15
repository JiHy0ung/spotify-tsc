import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  SwipeableDrawer,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { PlaylistTrack } from "../../../models/playlist";
import { Episode, Track } from "../../../models/track";
import { useParams } from "react-router";
import useRemovePlaylistItems from "../../../hooks/useRemovePlaylistItems";

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

const MobilePlaylistItemOptionMenuDeleteIcon = styled("svg")({
  height: "16px",
  width: "16px",
  fill: "#b3b3b3",
});

const MobilePlaylistItemListPuller = styled("div")({
  height: "5px",
  width: "50px",
  backgroundColor: "#b3b3b3",
  borderRadius: "30px",
});

const MobilePlaylistItems = ({ item, index }: MobilePlaylistItemProps) => {
  const [drawerMenuOpen, setDrawerMenuOpen] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const { mutate: removeItem } = useRemovePlaylistItems();

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerMenuOpen(newOpen);
  };

  const handleRemovePlaylistItem = (track: Track | Episode) => {
    removeItem({ playlist_id: id, track: { uri: track.uri } });
    setDrawerMenuOpen(false);
  };

  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track;
  };

  const DrawerList = (
    <List>
      <ListItem
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <MobilePlaylistItemListPuller />
      </ListItem>
      <ListItem>
        <ListItemButton
          onClick={() => {
            handleRemovePlaylistItem(item.track);
          }}
        >
          <ListItemIcon sx={{ minWidth: "32px" }}>
            <MobilePlaylistItemOptionMenuDeleteIcon
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M5.25 3v-.917C5.25.933 6.183 0 7.333 0h1.334c1.15 0 2.083.933 2.083 2.083V3h4.75v1.5h-.972l-1.257 9.544A2.25 2.25 0 0 1 11.041 16H4.96a2.25 2.25 0 0 1-2.23-1.956L1.472 4.5H.5V3zm1.5-.917V3h2.5v-.917a.583.583 0 0 0-.583-.583H7.333a.583.583 0 0 0-.583.583M2.986 4.5l1.23 9.348a.75.75 0 0 0 .744.652h6.08a.75.75 0 0 0 .744-.652L13.015 4.5H2.985z"></path>
            </MobilePlaylistItemOptionMenuDeleteIcon>
          </ListItemIcon>
          <ListItemText primary={"이 플레이리스트에서 삭제하기"} />
        </ListItemButton>
      </ListItem>
    </List>
  );

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
          onClick={toggleDrawer(true)}
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
        </MobilePlaylistItemsEllipsisIcon>
        <SwipeableDrawer
          anchor="bottom"
          onOpen={toggleDrawer(true)}
          open={drawerMenuOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { borderRadius: "16px 16px 0 0" },
          }}
        >
          {DrawerList}
        </SwipeableDrawer>
      </StyledTableCellTitle>
    </StyledTableRow>
  );
};

export default MobilePlaylistItems;
