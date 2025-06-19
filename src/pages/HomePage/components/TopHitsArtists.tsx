import React from "react";
import useGetSeveralArtists from "../../../hooks/useGetSeveralArtists";
import { Grid, styled } from "@mui/system";
import { Typography } from "@mui/material";
import Loading from "../../../common/components/Loading";
import ArtistCard from "../../../common/ArtistCard";

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
  const { data: topHitsArtists } = useGetSeveralArtists();

  console.log("topHitsArtists1", topHitsArtists);

  return (
    <div>
      <HeaderContainer>
        <Typography
          variant="h1"
          sx={{ cursor: "pointer", fontSize: { lg: "20px", xs: "20px" } }}
        >
          인기 아티스트
        </Typography>
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
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={artist.id}>
              <ArtistCard
                image={artist.images?.[0].url || ""}
                name={artist.name || ""}
                artistName={artist.name}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TopHitsArtists;
