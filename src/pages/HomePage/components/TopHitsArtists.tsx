import React from "react";
import useGetSeveralArtists from "../../../hooks/useGetSeveralArtists";
import { Grid, styled } from "@mui/system";
import { Skeleton, Typography } from "@mui/material";
import Loading from "../../../common/components/Loading";
import ArtistCard from "../../../common/components/ArtistCard";
import ArtistCardSkeleton from "../../../common/components/ArtistCardSkeleton";

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

const TopHitsArtists = () => {
  const { data: topHitsArtists, isLoading } = useGetSeveralArtists();

  console.log("topHitsArtists1", topHitsArtists);

  return (
    <div>
      <HeaderContainer>
        {isLoading ? (
          <Skeleton 
            variant="text"
            sx={{ fontSize: "24px", width: "90px" }}
          ></Skeleton>
        ) : (
          <Typography
            variant="h1"
            sx={{ cursor: "pointer", fontSize: { lg: "24px",  xs: "20px" } }}
          >
            인기 아티스트
          </Typography>
        )}
      </HeaderContainer>
      {topHitsArtists && topHitsArtists.artists.length > 0 ? (
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
          {topHitsArtists?.artists?.map((artist) => (
            <Grid
              size={{ xs: 6, sm: 4, md: 2 }}
              key={artist.id}
              display={"flex"}
              justifyContent={"center"}
            >
              <ArtistCard
                image={artist.images?.[0].url || ""}
                name={artist.name || ""}
                artistName={artist.name}
              />
            </Grid>
          ))}
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
              <ArtistCardSkeleton />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default TopHitsArtists;
