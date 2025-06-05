import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import useGetNewReleases from "../../../hooks/useGetNewReleases";
import Loading from "../../../common/components/Loading";
import ErrorMessage from "../../../common/components/ErrorMessage";
import Card from "../../../common/components/Card";

const NewReleases = () => {
  const HeaderContainer = styled("div")({
    height: "56px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    paddingInline: "40px",
    marginBottom: "8px",
  });

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

  console.log("ddd", newReleasesData);

  return (
    <div>
      <HeaderContainer>
        <Typography variant="h1" sx={{ cursor: "pointer" }}>
          New Releases
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          fontWeight={700}
          sx={{ cursor: "pointer" }}
        >
          모두 표시
        </Typography>
      </HeaderContainer>
      {newReleasesData && newReleasesData.albums.items.length > 0 ? (
        <Grid container paddingInline={"28px"}>
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
        <Typography variant="h2">No Data</Typography>
      )}
    </div>
  );
};

export default NewReleases;
