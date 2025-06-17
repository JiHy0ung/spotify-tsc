import React, { useState } from "react";
import useGetSeveralBrowseCategories from "../../hooks/useGetSeveralBrowseCategories";
import { Grid, styled, Typography } from "@mui/material";
import Loading from "../../common/components/Loading";
import { useNavigate } from "react-router";
import MobileSearchPageInputBar from "./components/MobileSearchPageInputBar";

const SearchPageContainer = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#121212",
  borderRadius: "8px",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "16px",

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
    paddingBottom: "100px",
  },
}));

const SearchPageCategoryContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  padding: "8px",
  [theme.breakpoints.down("xl")]: {
    padding: "0px",
    height: "100px",
  },
}));

const SearchPageCategoryArea = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  padding: "16px",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover img": {
    transform: "rotate(15deg) translate(20%, 15%)",
  },
});

const SearchPageTitle = styled(Typography)(({ theme }) => ({
  padding: "56px 12px 12px 12px",
  fontSize: "24px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
    padding: "20px 0px 32px 0px",
  },
}));

const SearchPageCategoryTitle = styled(Typography)(({ theme }) => ({
  zIndex: "2",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
}));

const SearchPageCategoryImage = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "135px",
  height: "135px",
  borderRadius: "4px",
  boxShadow: "0 2px  4px rgba(0,0,0,0.2)",
  objectFit: "cover",
  right: 0,
  transform: "rotate(25deg) translate(25%, 10%)",
  zIndex: "1",
  transition: "all 0.5s ease",
  [theme.breakpoints.down("xl")]: {
    width: "70px",
    height: "70px",
  },
}));

const SearchPage = () => {
  const { data: category, isLoading: categoryLoading } =
    useGetSeveralBrowseCategories();

  const getRandomBackgroundColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  if (categoryLoading) {
    <Loading />;
  }

  return (
    <SearchPageContainer>
      <MobileSearchPageInputBar />
      <SearchPageTitle variant="h1">모두 둘러보기</SearchPageTitle>
      <Grid width={"100%"} container spacing={{ xs: 2, xl: 1 }}>
        {category
          ? category.categories.items.map((c) => {
              const bgColor = getRandomBackgroundColor();
              return (
                <Grid size={{ xs: 6, lg: 6, xl: 3 }} key={c.id}>
                  <SearchPageCategoryContainer>
                    <SearchPageCategoryArea sx={{ backgroundColor: bgColor }}>
                      <SearchPageCategoryTitle variant="h1">
                        {c.name}
                      </SearchPageCategoryTitle>
                      <SearchPageCategoryImage src={c.icons[0].url} />
                    </SearchPageCategoryArea>
                  </SearchPageCategoryContainer>
                </Grid>
              );
            })
          : null}
      </Grid>
    </SearchPageContainer>
  );
};

export default SearchPage;
