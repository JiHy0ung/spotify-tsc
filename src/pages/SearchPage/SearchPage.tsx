import React from "react";
import useGetSeveralBrowseCategories from "../../hooks/useGetSeveralBrowseCategories";
import { Grid, styled, Typography } from "@mui/material";

const SearchPageContainer = styled("div")({
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
});

const SearchPageCategoryContainer = styled("div")({
  width: "100%",
  height: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  padding: "12px",
});

const SearchPageCategoryArea = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "red",
  borderRadius: "8px",
  padding: "16px",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
});

const SearchPageTitle = styled(Typography)({
  padding: "56px 12px 12px 12px",
});

const SearchPageCategoryTitle = styled(Typography)({
  zIndex: "2",
});

const SearchPageCategoryImage = styled("img")({
  position: "absolute",
  width: "135px",
  height: "135px",
  borderRadius: "4px",
  boxShadow: "0 2px  4px rgba(0,0,0,0.2)",
  objectFit: "cover",
  right: 0,
  transform: "rotate(25deg) translate(25%, 10%)",
  zIndex: "1",
});

const SearchPage = () => {
  const { data: category } = useGetSeveralBrowseCategories();

  console.log("dd", category);

  return (
    <SearchPageContainer>
      <SearchPageTitle variant="h1">모두 둘러보기</SearchPageTitle>
      <Grid width={"100%"} container spacing={1}>
        {category
          ? category.categories.items.map((c) => (
              <Grid size={{ lg: 6, xl: 3 }}>
                <SearchPageCategoryContainer>
                  <SearchPageCategoryArea>
                    <SearchPageCategoryTitle variant="h1">
                      {c.name}
                    </SearchPageCategoryTitle>
                    <SearchPageCategoryImage src={c.icons[0].url} />
                  </SearchPageCategoryArea>
                </SearchPageCategoryContainer>
              </Grid>
            ))
          : null}
      </Grid>
    </SearchPageContainer>
  );
};

export default SearchPage;
