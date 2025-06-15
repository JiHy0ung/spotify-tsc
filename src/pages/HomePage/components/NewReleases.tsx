import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import useGetNewReleases from "../../../hooks/useGetNewReleases";
import Loading from "../../../common/components/Loading";
import ErrorMessage from "../../../common/components/ErrorMessage";
import Card from "../../../common/components/Card";

const NewReleases = () => {
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

  const {
    data: newReleasesData,
    error: newReleasesError,
    isLoading: isNewReleasesLoading,
  } = useGetNewReleases();

  if (isNewReleasesLoading) {
    <Loading />;
  }

  if (newReleasesError) {
    return <ErrorMessage errorMessage={newReleasesError.message} />;
  }

  return (
    <div>
      <HeaderContainer>
        <Typography
          variant="h1"
          sx={{ cursor: "pointer", fontSize: { lg: "20px", xs: "20px" } }}
        >
          New Releases
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
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={album.id}>
              <Card
                image={album.images[0].url}
                name={album.name}
                artistName={album.artists[0].name}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h2" paddingInline={"24px"} color="#b3b3b3">
          No Data
        </Typography>
      )}
    </div>
  );
};

export default NewReleases;
