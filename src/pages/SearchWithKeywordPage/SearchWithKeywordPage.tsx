import { styled, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import useSearchItemsByKeyword from "../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../models/search";
import Loading from "../../common/components/Loading";
import SearchWithKeywordTrack from "./components/SearchWithKeywordTrack";
import SearchWithKeywordArtist from "./components/SearchWithKeywordArtist";
import SearchWithKeywordAlbum from "./components/SearchWithKeywordAlbum";
import SearchWithKeywordPlaylist from "./components/SearchWithKeywordPlaylist";
import { PAGE_LIMIT } from "../../configs/commonConfig";

const SearchWithKeywordPageContainer = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#121212",
  borderRadius: "8px",
  paddingInline: "24px",

  overflowX: "hidden",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ffffff4c",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#ffffff80",
  },

  [theme.breakpoints.down("xl")]: {
    paddingInline: "16px",
    paddingBottom: "80px",
  },
}));

const SearchWithKeywordNoResultArea = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const SearchWithKeywordTrackArea = styled("div")({});

const SearchWithKeywordArtistArea = styled("div")({});

const SearchWithKeywordAlbumArea = styled("div")({});

const SearchWithKeywordPlaylistArea = styled("div")({});

const SearchWithKeywordPage = () => {
  const { keyword = "" } = useParams<{ keyword: string }>();

  const { data, error, isLoading } = useSearchItemsByKeyword({
    q: keyword,
    type: [
      SEARCH_TYPE.TRACK,
      SEARCH_TYPE.ARTIST,
      SEARCH_TYPE.ALBUM,
      SEARCH_TYPE.PLAYLIST,
    ],
    limit: PAGE_LIMIT,
    offset: 0,
  });

  if (isLoading) {
    <Loading />;
  }

  const hasTrack = data?.pages.some((page) => page.tracks?.items.length);
  const hasArtist = data?.pages.some((page) => page.artists?.items.length);
  const hasAlbum = data?.pages.some((page) => page.albums?.items.length);
  const hasPlaylist = data?.pages.some((page) => page.playlists?.items.length);

  const hasNoResult = !hasTrack && !hasArtist && !hasAlbum && !hasPlaylist;

  console.log("data", data);

  return (
    <SearchWithKeywordPageContainer>
      {keyword && data && hasNoResult ? (
        <SearchWithKeywordNoResultArea>
          <Typography variant="h1" color="#ffffff">
            "{keyword}"과(와) 일치하는 결과가 없습니다
          </Typography>
          <Typography variant="body1" color="#ffffff">
            입력한 단어의 철자가 맞는지 확인하거나 짧은 키워드 또는 다른
            키워드를 사용하세요.
          </Typography>
        </SearchWithKeywordNoResultArea>
      ) : (
        <>
          <SearchWithKeywordTrackArea>
            {data?.pages.map((item, index) => {
              if (!item.tracks) return null;
              return (
                <SearchWithKeywordTrack
                  key={index}
                  tracks={item.tracks.items}
                />
              );
            })}
          </SearchWithKeywordTrackArea>

          <SearchWithKeywordArtistArea>
            {data?.pages.map((item, index) => {
              if (!item.artists) return null;
              return (
                <SearchWithKeywordArtist
                  key={index}
                  artists={item.artists.items}
                />
              );
            })}
          </SearchWithKeywordArtistArea>
          <SearchWithKeywordAlbumArea>
            {data?.pages.map((item, index) => {
              if (!item.albums) return null;
              return (
                <SearchWithKeywordAlbum
                  key={index}
                  albums={item.albums.items}
                />
              );
            })}
          </SearchWithKeywordAlbumArea>
          {/* <SearchWithKeywordPlaylistArea>
            {data?.pages.map((item, index) => {
              if (!item.playlists) return null;
              return (
                <SearchWithKeywordPlaylist
                  key={index}
                  playlists={item.playlists.items}
                />
              );
            })}
          </SearchWithKeywordPlaylistArea> */}
        </>
      )}
    </SearchWithKeywordPageContainer>
  );
};

export default SearchWithKeywordPage;
