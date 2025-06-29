import { Grid, Skeleton, styled, Typography } from "@mui/material";
import React from "react";
import useGetPlaylistItems from "../../../hooks/useGetPlaylistItems";
import { BILLBOARD_HOT_100, PAGE_LIMIT } from "../../../configs/commonConfig";
import { Episode, Track } from "../../../models/track";
import Card from "../../../common/components/Card";
import Loading from "../../../common/components/Loading";
import { useNavigate } from "react-router";
import useGetCurrentUserProfile from "../../../hooks/useGetCurrentUserProfile";
import CardSkeleton from "../../../common/components/CardSkeleton";

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
  const { data: user } = useGetCurrentUserProfile();

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

  if (playlistItemsError) {
    console.log("error", playlistItemsError);
  }

  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track;
  };

  return (
    <GlobalTrackChartContainer>
      {user && (
        <>
          <HeaderContainer onClick={handleClick}>
            {isPlaylistItemsLoading ? (
              <>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "24px", width: "90px" }}
                ></Skeleton>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "14px", width: "60px" }}
                ></Skeleton>
              </>
            ) : (
              <>
                <Typography
                  variant="h1"
                  sx={{
                    cursor: "pointer",
                    fontSize: { lg: "24px", xs: "20px" },
                  }}
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
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  모두 표시
                </Typography>
              </>
            )}
          </HeaderContainer>

          {playlistItems && playlistItems.pages.length > 0 ? (
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
                    <Grid
                      size={{ xs: 6, sm: 4, md: 2 }}
                      display={"flex"}
                      justifyContent={"center"}
                    >
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
          ) : (
            <Grid
              container
              spacing={4}
              sx={{
                flex: "display",
                paddingInline: {
                  xl: "32px",
                  lg: "8px",
                  md: "28px",
                  xs: "16px",
                },
              }}
            >
              {Array.from({ length: 6 }).map((_) => (
                <Grid
                  size={{ xs: 6, sm: 4, md: 2 }}
                  display={"flex"}
                  justifyContent={"center"}
                  padding={"12px"}
                >
                  <CardSkeleton />
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </GlobalTrackChartContainer>
  );
};

export default GlobalTrackChart;
