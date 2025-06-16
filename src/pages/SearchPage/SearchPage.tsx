import React from "react";
import useGetSeveralBrowseCategories from "../../hooks/useGetSeveralBrowseCategories";
import { Grid, styled, Typography } from "@mui/material";
import Loading from "../../common/components/Loading";

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
  [theme.breakpoints.down("xl")]: {
    width: "70px",
    height: "70px",
  },
}));
const MobileSearchPageSearchContainer = styled("div")(({ theme }) => ({
  display: "none",
  flexDirection: "column",
  [theme.breakpoints.down("xl")]: {
    display: "flex",
  },
}));

const MobileSearchPageSearchTitle = styled(Typography)(({ theme }) => ({
  display: "none",
  paddingBlock: "12px",
  [theme.breakpoints.down("xl")]: {
    display: "flex",
  },
}));

const MobileSearchPageSearchArea = styled("div")({
  width: "100%",
  height: "44px",
  display: "flex",
  padding: "0px 16px",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  gap: "8px",
});

const MobileSearchPageSearchInput = styled("input")({
  width: "100%",
  background: "none",
  outline: "none",
  border: "none",
  fontSize: "1rem",
  color: "#000000",
  "&::placeholder": {
    color: "#000000",
  },
});

const MobileSearchPageSearchInputIcon = styled("svg")({
  width: "24px",
  fill: "#000",
});

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
      <MobileSearchPageSearchContainer>
        <MobileSearchPageSearchTitle variant="h1">
          검색하기
        </MobileSearchPageSearchTitle>
        <MobileSearchPageSearchArea>
          <MobileSearchPageSearchInputIcon viewBox="0 0 24 24">
            <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
          </MobileSearchPageSearchInputIcon>
          <MobileSearchPageSearchInput placeholder="어떤 것을 듣고 싶으세요?"></MobileSearchPageSearchInput>
        </MobileSearchPageSearchArea>
      </MobileSearchPageSearchContainer>
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
