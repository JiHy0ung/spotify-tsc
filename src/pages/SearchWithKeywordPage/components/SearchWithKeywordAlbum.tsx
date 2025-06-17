import React from "react";
import { SimplifiedAlbum } from "../../../models/album";
import { Grid, styled, Typography } from "@mui/material";
import PlayButton from "../../../common/components/PlayButton";

interface SearchWithKeywordAlbumProps {
  albums: SimplifiedAlbum[];
}

const SearchAlbumContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "48px",
});

const SearchAlbumsResultArea = styled("div")({
  width: "189px",
  height: "264px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "8px",
  padding: "12px",
  borderRadius: "8px",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    backgroundColor: "#1f1f1f",
  },
  "&:hover .search-track-play-btn": {
    bottom: "95px",
    opacity: "1",
  },
});

const SearchAlbumNoCoverArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "165px",
  width: "165px",
  backgroundColor: "#333",
  borderRadius: "50%",
  boxShadow: "0 8px 24px #00000080",
});

const SearchAlbumNoCover = styled("svg")({
  height: "64px",
  width: "64px",
  fill: "#ffffff",
});

const SearchAlbumCoverArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "165px",
  width: "165px",
});

const SearchAlbumCover = styled("img")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "165px",
  height: "165px",
  borderRadius: "16px",
  boxShadow: "0 8px 24px #00000080",
});

const SearchAlbumTextInfo = styled("div")({
  width: "165px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "flex-start",
  gap: "4px",
});

const SearchAlbumTitle = styled(Typography)({
  "&:hover": {
    textDecoration: "underline",
  },
});

const SearchAlbumPlayButtonArea = styled("div")({
  opacity: "0",
  position: "absolute",
  right: "20px",
  bottom: "80px",
  transition: "all 0.3s ease",
});

const SearchWithKeywordAlbum = ({ albums }: SearchWithKeywordAlbumProps) => {
  return (
    <SearchAlbumContainer>
      <Typography variant="h1" marginBottom={"8px"}>
        앨범
      </Typography>
      <Grid
        width={"100%"}
        container
        spacing={{ xl: 1, lg: 2, md: 2, sm: 4, xs: 6 }}
      >
        {albums.slice(0, 6).map((album) => {
          return (
            <Grid size={{ lg: 2, md: 4, xs: 6, xl: 2 }}>
              <SearchAlbumsResultArea>
                {album.images && album.images.length > 0 ? (
                  <SearchAlbumCoverArea>
                    <SearchAlbumCover src={album.images?.[0].url} />
                    <SearchAlbumPlayButtonArea className="search-track-play-btn">
                      <PlayButton />
                    </SearchAlbumPlayButtonArea>
                  </SearchAlbumCoverArea>
                ) : (
                  <SearchAlbumNoCoverArea>
                    <SearchAlbumNoCover viewBox="0 0 24 24">
                      <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5z"></path>
                    </SearchAlbumNoCover>
                    <SearchAlbumPlayButtonArea className="search-track-play-btn">
                      <PlayButton />
                    </SearchAlbumPlayButtonArea>
                  </SearchAlbumNoCoverArea>
                )}
                <SearchAlbumTextInfo>
                  <SearchAlbumTitle variant="h2" fontWeight={400}>
                    {album.name.length > 30
                      ? album.name.slice(0, 30) + "..."
                      : album.name}
                  </SearchAlbumTitle>
                  <Typography variant="body1" color="#b3b3b3">
                    {album.release_date.slice(0, 4)} • {album.artists[0].name}
                  </Typography>
                </SearchAlbumTextInfo>
              </SearchAlbumsResultArea>
            </Grid>
          );
        })}
      </Grid>
    </SearchAlbumContainer>
  );
};

export default SearchWithKeywordAlbum;
