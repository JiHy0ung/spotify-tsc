import React, { MouseEvent, useState } from "react";
import { Track } from "../../../models/track";
import { Box, Grid, Menu, MenuItem, styled, Typography } from "@mui/material";
import PlayButton from "../../../common/components/PlayButton";
import useAddItemsToPlaylist from "../../../hooks/useAddItemsToPlaylist";
import useGetCurrentUserProfile from "../../../hooks/useGetCurrentUserProfile";
import { useParams } from "react-router";
import useGetCurrentUserPlaylists from "../../../hooks/useGetCurrentUserPlaylists";
import LoginButton from "../../../common/components/LoginButton";
import SearchWithKeywordAddMenuPlaylist from "./SearchWithKeywordAddMenuPlaylist";

interface SearchWithKeywordTrackProps {
  tracks: Track[];
}

const SearchTrackContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "48px",
  [theme.breakpoints.down("xl")]: {
    paddingTop: "24px",
  },
}));

const SearchTrackTopResultArea = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#181818",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    backgroundColor: "#282828",
  },

  "&:hover .search-track-play-btn": {
    bottom: "20px",
    opacity: "1",
  },
  [theme.breakpoints.down("xl")]: {
    flexDirection: "row",
  },
}));

const SearchTrackTopResultTrackCover = styled("img")({
  display: "flex",
  width: "92px",
  height: "92px",
  borderRadius: "6px",
});

const SearchTrackTopResultTextInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("xl")]: {
    justifyContent: "flex-start",
  },
}));

const SearchTrackTrackResultContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const SearchTrackTrackResultArea = styled("div")({
  height: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "8px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#ffffff1a",
    "& svg": {
      opacity: "1",
    },
  },
});

const SearchTrackTrackResultTrackArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
});

const SearchTrackTrackResultTrackInfoArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
});

const SearchTrackResultTrackOptionIcon = styled("svg")(({ theme }) => ({
  width: "32px",
  paddingRight: "16px",
  opacity: "0",
  fill: "#ffffff",
  [theme.breakpoints.down("xl")]: {
    opacity: "1",
    paddingInline: "8px",
  },
}));

const SearchTrackResultTrackAddIcon = styled("svg")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  paddingRight: "16px",
  opacity: "0",
  fill: "#b3b3b3",
  cursor: "pointer",

  [theme.breakpoints.down("xl")]: {
    opacity: "1",
    paddingInline: "8px",
  },
}));

const SearchTrackResultTrackAddButton = styled("button")(({ theme }) => ({
  outline: "none",
  border: "none",
  background: "none",
  width: "32px",
  paddingRight: "16px",
  cursor: "pointer",

  "&:hover svg": {
    fill: "#ffffff",
  },

  [theme.breakpoints.down("xl")]: {
    opacity: "1",
  },
}));

const SearchTrackResultDurationTime = styled(Typography)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const SearchTrackTrackCover = styled("img")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "4px",
});

const SearchTrackTrackTextInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const SearchTrackTrackTexts = styled(Typography)({
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
    color: "#ffffff",
  },
});

const SearchTrackTopResultPlayButtonArea = styled("div")({
  opacity: "0",
  position: "absolute",
  right: "20px",
  bottom: "10px",
  transition: "all 0.3s ease",
});

const SearchWithKeywordTrack = ({ tracks }: SearchWithKeywordTrackProps) => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const { data: user } = useGetCurrentUserProfile();
  const {
    data: userPlaylists,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetCurrentUserPlaylists({
    limit: 50,
    offset: 0,
  });

  const [anchorEL, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEL);

  const handleTrackMenuClick = (
    e: MouseEvent<HTMLButtonElement>,
    track: Track
  ) => {
    setAnchorEl(e.currentTarget);
    setSelectedTrack(track);
  };

  const handleTrackMenuClose = () => {
    setAnchorEl(null);
    setSelectedTrack(null);
  };

  let minutes: number = 0;
  let seconds: string | number = "00";

  console.log("user-playlist", userPlaylists);
  console.log("user", user);
  return (
    <SearchTrackContainer>
      <Grid width={"100%"} container spacing={2}>
        <Grid size={{ xl: 4, lg: 12, xs: 12 }}>
          <Typography variant="h1" marginBottom={"8px"}>
            상위 결과
          </Typography>
          <SearchTrackTopResultArea>
            <SearchTrackTopResultTrackCover
              src={tracks[0].album.images[0].url}
              alt={tracks[0].name}
            />
            <SearchTrackTopResultTextInfo>
              <Typography fontSize={"32px"} fontWeight={700}>
                {tracks[0].name}
              </Typography>
              <Typography>곡 • {tracks[0].artists?.[0].name}</Typography>
            </SearchTrackTopResultTextInfo>
            <SearchTrackTopResultPlayButtonArea className="search-track-play-btn">
              <PlayButton />
            </SearchTrackTopResultPlayButtonArea>
          </SearchTrackTopResultArea>
        </Grid>
        <Grid size={{ xs: 12, xl: 8 }}>
          <Typography
            variant="h1"
            marginBottom={"8px"}
            sx={{ paddingInline: { xl: "16px", lg: "0px" } }}
          >
            곡
          </Typography>
          <SearchTrackTrackResultContainer>
            {tracks.slice(0, 4).map((track) => {
              if (track.duration_ms && track.duration_ms !== 0) {
                minutes = Math.floor(track.duration_ms / 60000);
                seconds = Math.floor((track.duration_ms % 60000) / 1000)
                  .toString()
                  .padStart(2, "0");
              }
              return (
                <SearchTrackTrackResultArea>
                  <SearchTrackTrackResultTrackArea>
                    <SearchTrackTrackCover
                      src={track.album.images[0].url}
                      alt={track.name}
                    />
                    <SearchTrackTrackTextInfo>
                      <SearchTrackTrackTexts variant="h2" fontWeight={400}>
                        {track.name}
                      </SearchTrackTrackTexts>
                      <SearchTrackTrackTexts variant="body1" color="#b3b3b3">
                        {track.artists?.map((artist) => artist.name).join(", ")}
                      </SearchTrackTrackTexts>
                    </SearchTrackTrackTextInfo>
                  </SearchTrackTrackResultTrackArea>
                  <SearchTrackTrackResultTrackInfoArea>
                    {user && (
                      <SearchTrackResultTrackAddButton
                        onClick={(e) => handleTrackMenuClick(e, track)}
                      >
                        <SearchTrackResultTrackAddIcon
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path>
                          <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path>
                        </SearchTrackResultTrackAddIcon>
                      </SearchTrackResultTrackAddButton>
                    )}

                    <Menu
                      anchorEl={anchorEL}
                      open={open}
                      onClose={handleTrackMenuClose}
                      PaperProps={{
                        sx: {
                          display: "flex",
                          width: "292px",
                          maxHeight: "490px",
                          borderRadius: "8px",
                          boxShadow: "0 16px 24px rgba(0,0,0, 0.3)",
                          backgroundColor: "#1f1f1f",
                          ml: { xl: -15, xs: -10 },
                        },
                      }}
                      MenuListProps={{
                        sx: {
                          backgroundColor: "#1f1f1f",
                          padding: 0,
                          width: "100%",
                        },
                      }}
                    >
                      <Typography
                        fontSize={"12px"}
                        fontWeight={700}
                        color="#b3b3b3"
                        width={"100%"}
                        height={"40px"}
                        display={"flex"}
                        alignItems={"center"}
                        position={"sticky"}
                        paddingInline={"16px"}
                        top={0}
                        zIndex={1}
                        bgcolor={"#1f1f1f"}
                      >
                        플레이리스트에 추가
                      </Typography>
                      <Box
                        sx={{
                          overflowX: "hidden",
                          overflowY: "auto",
                          display: "flex",
                          flexDirection: "column",
                          height: "390px",
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
                        }}
                      >
                        {userPlaylists?.pages.map((page, index) => (
                          <SearchWithKeywordAddMenuPlaylist
                            track={selectedTrack?.uri}
                            playlists={page.items}
                            key={index}
                          />
                        ))}
                      </Box>
                    </Menu>

                    <SearchTrackResultDurationTime
                      variant="body1"
                      color="#b3b3b3"
                    >
                      {minutes}:{seconds}
                    </SearchTrackResultDurationTime>
                    <SearchTrackResultTrackOptionIcon
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                    </SearchTrackResultTrackOptionIcon>
                  </SearchTrackTrackResultTrackInfoArea>
                </SearchTrackTrackResultArea>
              );
            })}
          </SearchTrackTrackResultContainer>
        </Grid>
      </Grid>
    </SearchTrackContainer>
  );
};

export default SearchWithKeywordTrack;
