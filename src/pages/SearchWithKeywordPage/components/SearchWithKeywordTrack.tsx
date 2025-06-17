import React from "react";
import { Track } from "../../../models/track";
import { Grid, styled, Typography } from "@mui/material";
import PlayButton from "../../../common/components/PlayButton";

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
  let minutes: number = 0;
  let seconds: string | number = "00";

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
