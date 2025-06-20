import React from "react";
import { Box, Grid, Skeleton, styled, Typography } from "@mui/material";
import useGetNewReleases from "../../../hooks/useGetNewReleases";
import Loading from "../../../common/components/Loading";
import ErrorMessage from "../../../common/components/ErrorMessage";
import Card from "../../../common/components/Card";
import CardSkeleton from "../../../common/components/CardSkeleton";

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

const NewReleases = () => {
  const {
    data: newReleasesData,
    error: newReleasesError,
    isLoading: isNewReleasesLoading,
  } = useGetNewReleases();

  if (newReleasesError) {
    return <ErrorMessage errorMessage={newReleasesError.message} />;
  }

  return (
    <div>
      <HeaderContainer>
        {isNewReleasesLoading ? (
          <Skeleton
            variant="text"
            sx={{ fontSize: "24px", width: "90px" }}
          ></Skeleton>
        ) : (
          <Typography
            variant="h1"
            sx={{ cursor: "pointer", fontSize: { lg: "24px", xs: "20px" } }}
          >
            인기 신곡
          </Typography>
        )}
      </HeaderContainer>
      {newReleasesData && newReleasesData.albums.items.length > 0 ? (
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
          {newReleasesData.albums.items.map((album) => (
            <Grid
              size={{ xs: 6, sm: 4, md: 2 }}
              key={album.id}
              display={"flex"}
              justifyContent={"center"}
            >
              <Card
                image={album.images[0].url}
                name={album.name}
                artistName={album.artists[0].name}
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
          {Array.from({ length: 6 }).map((_,) => (
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
    </div>
  );
};

export default NewReleases;
