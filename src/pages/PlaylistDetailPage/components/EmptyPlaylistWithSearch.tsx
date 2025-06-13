import { styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useSearchItemsByKeyword from "../../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../../models/search";
import SearchResultList from "./SearchResultList";

const EmptyPlaylistWithSearchContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "24px 0px",
  margin: "24px 0px 0px",
  borderTop: "1px solid #ffffff1a",
});

const EmptyPlaylistWithSearchTextField = styled(TextField)({
  backgroundColor: "#ffffff1a",
});

const EmptyPlaylistWithSearch = () => {
  const [keyword, setKeyword] = useState<string>("");

  const { data, error, isLoading } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.TRACK],
  });

  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  return (
    <EmptyPlaylistWithSearchContainer>
      <Typography variant="h1" fontWeight={700}>
        플레이리스트에 추가할 곡을 찾아보세요
      </Typography>
      <EmptyPlaylistWithSearchTextField
        value={keyword}
        onChange={handleSearchKeyword}
        placeholder="곡 또는 에피소드 검색하기"
      />
      {/* // data 없을때 no result 처리 하기 */}
      {data?.pages.map((item) => {
        if (!item.tracks) return false;
        return <SearchResultList list={item.tracks?.items} />;
      })}
    </EmptyPlaylistWithSearchContainer>
  );
};

export default EmptyPlaylistWithSearch;
