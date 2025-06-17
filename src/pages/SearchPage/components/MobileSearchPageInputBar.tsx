import { styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

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

const MobileSearchPageInputBar = () => {
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchWithKeyword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setKeyword(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate(`/search/${keyword}`);
    }
  };
  
  return (
    <MobileSearchPageSearchContainer>
      <MobileSearchPageSearchTitle variant="h1">
        검색하기
      </MobileSearchPageSearchTitle>
      <MobileSearchPageSearchArea>
        <MobileSearchPageSearchInputIcon viewBox="0 0 24 24">
          <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
        </MobileSearchPageSearchInputIcon>
        <MobileSearchPageSearchInput
          value={keyword}
          onChange={handleSearchWithKeyword}
          onKeyDown={handleKeyDown}
          placeholder="어떤 것을 듣고 싶으세요?"
        ></MobileSearchPageSearchInput>
      </MobileSearchPageSearchArea>
    </MobileSearchPageSearchContainer>
  );
};

export default MobileSearchPageInputBar;
