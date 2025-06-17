import React from "react";
import { BasePlaylist } from "../../../models/playlist";
import { Grid, styled, Typography } from "@mui/material";
import PlayButton from "../../../common/components/PlayButton";

interface SearchWithKeywordPlaylistProps {
  playlists: BasePlaylist[];
}

const SearchPlaylistContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "48px",
});

const SearchPlaylistsResultArea = styled("div")({
  width: "189px",
  height: "264px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

const SearchPlaylistCoverArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "165px",
  width: "165px",
});

const SearchPlaylistNoCoverArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "165px",
  width: "165px",
  backgroundColor: "#333",
  borderRadius: "50%",
  boxShadow: "0 8px 24px #00000080",
});

const SearchArtistsNoCover = styled("svg")({
  height: "64px",
  width: "64px",
  fill: "#ffffff",
});

const SearchPlaylistCover = styled("img")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "165px",
  height: "165px",
  borderRadius: "16px",
  objectFit: "cover",
  boxShadow: "0 8px 24px #00000080",
});

const SearchPlaylistTextInfo = styled("div")({
  width: "165px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "flex-start",
  gap: "4px",
});

const SearchPlaylistTitle = styled(Typography)({
  "&:hover": {
    textDecoration: "underline",
  },
});

const SearchPlaylistPlayButtonArea = styled("div")({
  opacity: "0",
  position: "absolute",
  right: "20px",
  bottom: "80px",
  transition: "all 0.3s ease",
});

const SearchWithKeywordPlaylist = ({
  playlists,
}: SearchWithKeywordPlaylistProps) => {
  return (
    <SearchPlaylistContainer>
      <Typography variant="h1" marginBottom={"8px"}>
        플레이리스트
      </Typography>
      {playlists.length === 0 ? null : (
        <Grid width={"100%"} container spacing={1}>
          {playlists.slice(0, 6).map((playlist) => {
            return (
              <>
                {playlist ? (
                  <Grid size={{ xs: 12, xl: 2 }}>
                    <SearchPlaylistsResultArea>
                      {playlist.images && playlist.images.length > 0 ? (
                        <SearchPlaylistCoverArea>
                          <SearchPlaylistCover src={playlist.images?.[0].url} />
                          <SearchPlaylistPlayButtonArea className="search-track-play-btn">
                            <PlayButton />
                          </SearchPlaylistPlayButtonArea>
                        </SearchPlaylistCoverArea>
                      ) : (
                        <SearchPlaylistNoCoverArea>
                          <SearchArtistsNoCover viewBox="0 0 24 24">
                            <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5z"></path>
                          </SearchArtistsNoCover>
                          <SearchPlaylistPlayButtonArea className="search-track-play-btn">
                            <PlayButton />
                          </SearchPlaylistPlayButtonArea>
                        </SearchPlaylistNoCoverArea>
                      )}
                      <SearchPlaylistTextInfo>
                        <SearchPlaylistTitle variant="h2" fontWeight={400}>
                          {playlist.name}
                        </SearchPlaylistTitle>
                        <Typography variant="body1" color="#b3b3b3">
                          만든 사람: {playlist.owner?.display_name}
                        </Typography>
                      </SearchPlaylistTextInfo>
                    </SearchPlaylistsResultArea>
                  </Grid>
                ) : null}
              </>
            );
          })}
        </Grid>
      )}
    </SearchPlaylistContainer>
  );
};

export default SearchWithKeywordPlaylist;
