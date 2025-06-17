import { styled } from "@mui/material";
import React from "react";
import { useParams } from "react-router";

const SearchWithKeywordPageContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#121212",
  borderRadius: "8px",
  paddingInline: "24px",
});

const SearchWithKeywordTrackArea = styled("div")({});

const SearchWithKeywordArtistArea = styled("div")({});

const SearchWithKeywordAlbumArea = styled("div")({});

const SearchWithKeywordPlaylistArea = styled("div")({});

const SearchWithKeywordPage = () => {
  const { keyword } = useParams<{ id: string }>();

  return (
    <SearchWithKeywordPageContainer>
      <SearchWithKeywordTrackArea>상위결과 / 곡</SearchWithKeywordTrackArea>
      <SearchWithKeywordArtistArea>아티스트</SearchWithKeywordArtistArea>
      <SearchWithKeywordAlbumArea>앨범</SearchWithKeywordAlbumArea>
      <SearchWithKeywordPlaylistArea>
        플레이리스트
      </SearchWithKeywordPlaylistArea>
    </SearchWithKeywordPageContainer>
  );
};

export default SearchWithKeywordPage;
