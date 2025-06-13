import {
  Box,
  InputAdornment,
  styled,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useSearchItemsByKeyword from "../../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../../models/search";
import SearchResultList from "./SearchResultList";
import Loading from "../../../common/components/Loading";
import { useInView } from "react-intersection-observer";
import { PAGE_LIMIT } from "../../../configs/commonConfig";

const EmptyPlaylistWithSearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "24px 0px",
  margin: "24px",
  borderTop: "1px solid #ffffff1a",
  overflowY: "auto",
  [theme.breakpoints.down("xl")]: {
    alignItems: "center",
    padding: "16px 0px",
    margin: "0px 16px",
    borderTop: "none",
  },
}));

const EmptyPlaylistWithSearchArea = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  gap: "16px",
  marginBottom: "16px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const EmptyPlaylistWithSearchStyledTypography = styled(Typography)(
  ({ theme }) => ({
    letterSpacing: "-0.5px",
    [theme.breakpoints.down("xl")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

const EmptyPlaylistWithSearchTextField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))({
  display: "flex",
  justifyContent: "center",
  height: "40px",
  outline: "none",
  border: "none",
  borderRadius: "4px",
  color: "#ffffffb3",
  backgroundColor: "#ffffff1a",
  fontSize: "0.875rem",
  "& .MuiOutlinedInput-root": {
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
  },
});

const EmptyPlaylistWithSearchTextFieldIcon = styled("svg")({
  width: "16px",
  fill: "#ffffffb3",
});

const EmptyPlaylistWithSearchNoResultContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const EmptyPlaylistWithSearchEmptyBottom = styled("div")(({ theme }) => ({
  height:"56px",
  [theme.breakpoints.down("xl")]: {
  height:"64px",
  },
}));

const EmptyPlaylistWithSearch = () => {
  const [keyword, setKeyword] = useState<string>("");
  const { ref, inView } = useInView({});

  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.TRACK],
    limit: PAGE_LIMIT,
    offset: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <EmptyPlaylistWithSearchContainer>
      <EmptyPlaylistWithSearchArea>
        <EmptyPlaylistWithSearchStyledTypography variant="h1" fontWeight={700}>
          플레이리스트에 추가할 곡을 찾아보세요
        </EmptyPlaylistWithSearchStyledTypography>
        <EmptyPlaylistWithSearchTextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "none" },
            },
          }}
          value={keyword}
          onChange={handleSearchKeyword}
          placeholder="곡 또는 에피소드 검색하기"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmptyPlaylistWithSearchTextFieldIcon
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7"></path>
                </EmptyPlaylistWithSearchTextFieldIcon>
              </InputAdornment>
            ),
          }}
        />
      </EmptyPlaylistWithSearchArea>

      {isLoading && (
        <>
          <Loading />
        </>
      )}

      {keyword &&
      data &&
      data.pages.every(
        (page) => !page.tracks || page.tracks.items.length === 0
      ) ? (
        <EmptyPlaylistWithSearchNoResultContainer>
          <Typography variant="h1" color="#b3b3b3">
            "{keyword}"과(와) 일치하는 결과가 없습니다
          </Typography>
          <Typography variant="body1" color="#b3b3b3">
            입력한 단어의 철자가 맞는지 확인하거나 짧은 키워드 또는 다른
            키워드를 사용하세요.
          </Typography>
        </EmptyPlaylistWithSearchNoResultContainer>
      ) : (
        data?.pages.map((item, index) => {
          if (!item.tracks) return null;
          return <SearchResultList key={index} list={item.tracks.items} />;
        })
      )}
      <div ref={ref}>{isFetchingNextPage && <Loading />}</div>
      <EmptyPlaylistWithSearchEmptyBottom></EmptyPlaylistWithSearchEmptyBottom>
    </EmptyPlaylistWithSearchContainer>
  );
};

export default EmptyPlaylistWithSearch;
