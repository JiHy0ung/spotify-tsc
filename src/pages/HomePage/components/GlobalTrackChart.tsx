import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import useGetPlaylistItems from "../../../hooks/useGetPlaylistItems";
import { BILLBOARD_HOT_100, PAGE_LIMIT } from "../../../configs/commonConfig";
import { Episode, Track } from "../../../models/track";
import Card from "../../../common/components/Card";
import Loading from "../../../common/components/Loading";
import { useNavigate } from "react-router";

const GlobalTrackChartContainer = styled("div")({
  width: "100%",
});

const HeaderContainer = styled("div")(({ theme }) => ({
  height: "56px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  paddingInline: "40px",
  marginBottom: "8px",
  [theme.breakpoints.down("xl")]: {
    paddingInline: "16px",
    paddingTop: "24px",
    paddingBottom: "12px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingInline: "40px",
  },
  [theme.breakpoints.down("md")]: {
    paddingInline: "24px",
  },
}));

const GlobalTrackChart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/playlist/${BILLBOARD_HOT_100}`);
  };

  const {
    data: playlistItems,
    isLoading: isPlaylistItemsLoading,
    error: playlistItemsError,
  } = useGetPlaylistItems({
    playlist_id: BILLBOARD_HOT_100,
    limit: PAGE_LIMIT,
  });

  if (isPlaylistItemsLoading) {
    <Loading />;
  }

  if (playlistItemsError) {
    console.log("error", playlistItemsError);
  }

  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track;
  };

  return (
    <GlobalTrackChartContainer>
      <HeaderContainer onClick={handleClick}>
        <Typography
          variant="h1"
          sx={{ cursor: "pointer", fontSize: { lg: "20px", xs: "20px" } }}
        >
          빌보드 차트: Top 100
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          fontWeight={700}
          sx={{
            cursor: "pointer",
            display: {
              xs: "none",
              lg: "none",
              xl: "block",
            },
          }}
        >
          모두 표시
        </Typography>
      </HeaderContainer>
      <Grid
        container
        spacing={4}
        sx={{
          flex: "display",
          paddingInline: {
            xl: "28px",
            lg: "8px",
            md: "28px",
            xs: "16px",
          },
        }}
      >
        {playlistItems?.pages.map((page, pageIndex) =>
          page.items.slice(0, 6).map((item, itemIndex) => {
            return (
              <Grid size={{ xs: 6, sm: 4, md: 2 }}>
                {isEpisode(item.track) ? (
                  "No Image"
                ) : (
                  <Card
                    image={item.track.album?.images[0].url}
                    name={item.track.name || ""}
                    artistName={item.track.artists?.[0].name}
                  />
                )}
              </Grid>
            );
          })
        )}
      </Grid>
    </GlobalTrackChartContainer>
  );
};

export default GlobalTrackChart;
