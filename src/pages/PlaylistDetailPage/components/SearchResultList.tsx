import React, { useState } from "react";
import { Track } from "../../../models/track";
import { Snackbar, styled, Typography } from "@mui/material";
import useGetCurrentUserProfile from "../../../hooks/useGetCurrentUserProfile";
import useAddItemsToPlaylist from "../../../hooks/useAddItemsToPlaylist";
import { useParams } from "react-router";

interface SearchResultListProps {
  list: Track[];
}

const SearchResultListContainer = styled("div")(({ theme }) => ({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 500px auto",
  alignItems: "center",
  height: "56px",
  paddingInline: "8px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#2b2b2b",
  },
  "&:hover .hover-text-white": {
    color: "#ffffff",
  },
  [theme.breakpoints.down("xl")]: {
    height: "64px",
    width: "97vw",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "0px",
  },
}));

const SearchResultListInfoArea = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "16px",
});

const SearchResultListTextArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

const SearchResultListAlbumCover = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "4px",
  [theme.breakpoints.down("xl")]: {
    width: "48px",
    height: "48px",
  },
}));

const SearchResultAddButton = styled("button")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "none",
  outline: "none",
  border: "1px solid #7c7c7c",
  borderRadius: "30px",
  padding: "8px 16px",
  color: "#ffffff",
  fontSize: "0.875rem",
  fontWeight: "700",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    border: "1px solid #ffffff",
  },
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const SearchResultMobileAddButton = styled("button")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "none",
  outline: "none",
  border: "none",
  width: "64px",
  [theme.breakpoints.up("xl")]: {
    display: "none",
  },
}));

const SearchResultMobileAddButtonIcon = styled("svg")({
  width: "24px",
  fill: "#b3b3b3",
});

const SearchResultSongTitle = styled(Typography)({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "400",
  cursor: "default",
});

const SearchResultArtistsName = styled(Typography)({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "#b3b3b3",
  fontSize: "14px",
  fontWeight: "400",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const SearchResultAlbumName = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "#b3b3b3",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const SearchResultList = ({ list }: SearchResultListProps) => {
  const [successMessageOpen, setSuccessMessageOpen] = useState<boolean>(false);

  const { data: user } = useGetCurrentUserProfile();
  const { mutate: addItem } = useAddItemsToPlaylist(() => {
    setSuccessMessageOpen(true);
  });
  const { id } = useParams<{ id: string }>();

  const addItemToPlaylist = (uri: string) => {
    if (user) {
      addItem({ playlist_id: id, uris: [uri] });
    }
  };

  return (
    <div>
      {list.map((track) => (
        <SearchResultListContainer key={track.id}>
          <SearchResultListInfoArea>
            <SearchResultListAlbumCover src={track.album.images[0].url} />
            <SearchResultListTextArea>
              <SearchResultSongTitle>
                {track.name.length > 30
                  ? track.name.slice(0, 30) + "..."
                  : track.name}
              </SearchResultSongTitle>
              <SearchResultArtistsName className="hover-text-white">
                {track.artists?.map((artist) => artist.name).join(", ")}
              </SearchResultArtistsName>
            </SearchResultListTextArea>
          </SearchResultListInfoArea>
          <SearchResultAlbumName className="hover-text-white">
            {track.album.name}
          </SearchResultAlbumName>
          <SearchResultAddButton
            onClick={() => {
              addItemToPlaylist(track.uri);
            }}
          >
            추가하기
          </SearchResultAddButton>
          <SearchResultMobileAddButton>
            <SearchResultMobileAddButtonIcon
              aria-hidden="true"
              viewBox="0 0 24 24"
              onClick={() => {
                addItemToPlaylist(track.uri);
              }}
            >
              <path d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11"></path>
              <path d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1"></path>
            </SearchResultMobileAddButtonIcon>
          </SearchResultMobileAddButton>
        </SearchResultListContainer>
      ))}
      <Snackbar
        open={successMessageOpen}
        autoHideDuration={100000}
        message="플레이리스트에 곡이 추가 되었습니다!"
      ></Snackbar>
    </div>
  );
};

export default SearchResultList;
